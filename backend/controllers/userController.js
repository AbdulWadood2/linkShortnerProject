import { StatusCodes } from "http-status-codes";
import url from "urlshortit";

const applicationProgramInterface = {
  /* linkShortner */
  linkShortner: async (req, res) => {
    try {
      let { URL } = req.body;
      /* replace because @ is not acceptable in this package 😶 */
      URL = URL.replace("@", "");
      const response = await url(URL);
      res.status(StatusCodes.ACCEPTED).json({
        response,
      });
    } catch (error) {
      const err = error.stack;
      res.status(StatusCodes.BAD_REQUEST).json({ error: err });
    }
  },
};

export default applicationProgramInterface;
