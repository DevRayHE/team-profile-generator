const dedent = require('dedent');

function renderTitle() {

}

function renderButton() {

}

function renderCard() {

}

function renderPage() {
  const renderContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
    <!-- Font  -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700&display=swap" rel="stylesheet">
  
    <!-- CSS files -->
    <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" 
    crossorigin="anonymous"
    >
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" href="./dist/css/normalize.css">
    <link rel="stylesheet" type="text/css" href="./dist/css/style.css">
  
    <title>My Team</title>
  </head>
  
  <body>
  
    <header>
      <div class="jumbotron bg-danger text-center">
        <h1 class="display-4  text-light">My Team</h1>
        <hr class="my-4">
      </div>
    </header>
  
  
    <main class="container">
  
      <div class="card-group">
        <div class="row" style="justify-content: space-evenly">
  
          <div class="card col-12 col-md-5 col-lg-3 p-2 m-2 bg-primary">
            <div class="card-header ">
              <p><h2>Jared</h2></p>
              <h2><span style='font-size:50px;'>&#9749;</span>Manager</h2>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item"><p>ID: 1</p></li>
                <li class="list-group-item"><p>Email: <a href="mailto:jared@fakemail.com"></a></p></li>
                <li class="list-group-item"><p>Office number: 1</p></li>
              </ul>
            </div>
          </div>
  
          <div class="card col-12 col-md-5 col-lg-3 p-2 m-2 bg-primary">
            <div class="card-header ">
              <p><h2>Jared</h2></p>
              <h2><span style='font-size:50px;'>&#9749;</span>Manager</h2>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item"><p>ID: 1</p></li>
                <li class="list-group-item"><p>Email: <a href="mailto:jared@fakemail.com"></a></p></li>
                <li class="list-group-item"><p>Office number: 1</p></li>
              </ul>
            </div>
          </div>
  
          <div class="card col-12 col-md-5 col-lg-3 p-2 m-2 bg-primary">
            <div class="card-header ">
              <p><h2>Jared</h2></p>
              <h2><span style='font-size:50px;'>&#9749;</span>Manager</h2>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item"><p>ID: 1</p></li>
                <li class="list-group-item"><p>Email: <a href="mailto:jared@fakemail.com"></a></p></li>
                <li class="list-group-item"><p>Office number: 1</p></li>
              </ul>
            </div>
          </div>
  
          <div class="card col-12 col-md-5 col-lg-3 p-2 m-2 bg-primary">
            <div class="card-header ">
              <p><h2>Jared</h2></p>
              <h2><span style='font-size:50px;'>&#9749;</span>Manager</h2>
            </div>
            <div class="card-body bg-light">
              <ul class="list-group list-group-flush bg-light">
                <li class="list-group-item"><p>ID: 1</p></li>
                <li class="list-group-item"><p>Email: <a href="mailto:jared@fakemail.com"></a></p></li>
                <li class="list-group-item"><p>Office number: 1</p></li>
              </ul>
            </div>
          </div>
  
        </div>
      </div>
  
    </main>
  
  <!-- JS files -->
  <script 
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" 
  integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" 
  crossorigin="anonymous">
  </script>
  
  <script src="./script.js"></script>
  </body>
  </html>`

  return renderContent;
}

module.exports = {
  renderPage,
};