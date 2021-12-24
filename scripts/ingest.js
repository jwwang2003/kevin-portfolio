const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const root = path.join(__dirname, '../', 'images')

var dict = {
  featured: []
}

const inFiles = fs.readdirSync(path.resolve(root, 'featured'));

for (const file of inFiles) {  
  var finalFile = fs.createWriteStream(path.resolve(root, 'compressed', file));
  sharp(path.resolve(root, 'featured', file))
    .resize(1000)
    .jpeg({ quality: 85, progressive: true })
    .pipe(finalFile)
  sharp(path.resolve(root, 'compressed', file))
    .metadata()
    .then(meta => dict.featured.push({
      src: "/images/featured/" + file,
      width: meta.width,
      height: meta.height
    }))
    .finally(() => fs.writeFileSync(path.resolve(root, 'test.json'), JSON.stringify(dict)))
}
