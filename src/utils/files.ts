import fs  from "fs"

class fileBase64Encode {
    async base64_encode(img: any) {        
     
        try {
            // read binary data
            var bitmap = fs.readFileSync(img);
            // convert binary data to base64 encoded string
            return new Buffer(bitmap).toString('base64');            
        } catch (error) {
            return false
        }
    }
}

export default new fileBase64Encode()