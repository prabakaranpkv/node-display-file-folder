import express from "express";
import fs from "fs";
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  fs.readdir("./myFolder", (error, folder) => {
    if (error) {
      console.error();
    }
    var result = `<th>
        List of Files in My Folder</th>`;
    var reg = /^[a-zA-Z0-9-]*$/;

    folder.map((file) => {
      if (file.match(".txt")) {
        result += `
                <tr>
                <td>
                <img src="https://img.flaticon.com/icons/png/512/32/32329.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF" alt="json" width="50" height="50">
                <br>${file}&emsp;
                </td>   
                </tr>         
                `;
      }
      if (file.match(".doc")) {
        result += `
                <tr>
                <td>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/.docx_icon.svg/1200px-.docx_icon.svg.png" alt="docx" width="50" height="50">
                <br>${file}&emsp;
                <td>
                </tr>
                `;
      }
      if (file.match(".png")) {
        result += `
                <tr>
                <td>
                <img src="https://image.flaticon.com/icons/png/512/136/136524.png" alt="json" width="50" height="50">
                <br>${file}&emsp;
                </td>  
                </tr>          
                `;
      }
      if (file.match(".mp4")) {
        result += `
                <tr>
                <td>
                <img src="https://image.flaticon.com/icons/png/512/136/136545.png" alt="json" width="50" height="50">
                <br>${file}&emsp;
                </td>      
                      </tr>
                `;
      }
      if (file.match(reg)) {
        result += `
                <tr>
                <td>
                <img src="https://img.icons8.com/emoji/452/open-file-folder-emoji.png" alt="json" width="50" height="50">
                <br>${file}&emsp;
                </td>  
                </tr>          
                `;
      }
    });
    result = `<table ><tr>${result}<tr><table>`;
    res.send(result);
  });
});

app.listen(PORT, () => console.log("Node App is running in the port  " + PORT));
