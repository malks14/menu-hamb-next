import Papa from "papaparse"

const api = {
  links: {
    fetch: async () => {
      const res = await fetch(
        "https://docs.google.com/spreadsheets/d/e/2PACX-1vRzsjgPhFPixLaK9DvVxK5ihEkjqeybJAzBSqGrQbavcZwKgW1453MfwsMey786kp5dVdpC9COq0Tm4/pub?gid=184471765&&output=csv"
      );
      const data = await res.text();
      const parsed = await new Promise((resolve, reject) => {
        Papa.parse(data, { header: true, complete: resolve, error: reject });
      });

      return parsed.data;
    },
  },
};


export default api

