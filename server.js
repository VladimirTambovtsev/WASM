const express = require('express')
const app = express()

// Serve static files from /public
app.use(express.static('public', {
    setHeaders: (res, path, stat) => {
        // Serve .wasm files with 'application/wasm' mime type
        if (path.endsWith(".wasm")) {
            res.set("Content-Type", "application/wasm");
        }
    }
}))

// Start server
const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
