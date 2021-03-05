import axios from "axios";

// create our own axios server
export default axios.create({
  baseURL: "https://unsplash.com",
  headers: {
    Authorization: "Client-ID jwBcpjJEoz18O62MtRPk_BqyqQPNW2a1hVv8xO3FRYo",
  },
});

// Access Key   jwBcpjJEoz18O62MtRPk_BqyqQPNW2a1hVv8xO3FRYo

// Secret key  cPAKJgYUN_rrG2o9bUVrTXf5SupZT9MAduEPazblaHY
