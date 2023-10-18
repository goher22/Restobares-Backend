import {config} from "dotenv"
import Serve from "./models/serve"

config();

const serve = new Serve();

serve.listen();