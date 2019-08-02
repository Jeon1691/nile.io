export default function defaultLayout ({stylesHTML, bodyHTML}) {
  return `<!doctype html>
<html lang="en">
  <head>
    <title>Envato</title>
    ${stylesHTML}
  </head>
  <body>
    ${bodyHTML}
    <script src='/client.bundle.js'></script>
  </body>
</html>
`
}
