import React from 'react'; // esta también viene importado
import './App.css';
function App() {
  return (
    <div className="App">
       <table class="table">
  <thead>
    <tr>
      <th>Nombres</th>
      <th>Correo</th>
      <th>Cédula</th>
      <th>Telefono</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Melissa Álvarez</th>
      <td>melissaalvalezurrego@gmail.com</td>
      <td>1000205200</td>
      <td>3041144091</td>
    </tr>
    <tr>
      <th>Ángela Monsalve</th>
      <td>angelamonsalve2004@gmail.com</td>
      <td>1018223105</td>
      <td>3003765090</td>
    </tr>
    <tr>
      <th>Jordanis Holmos</th>
      <td>jordanisholmosrodrigues@gmail.com</td>
      <td>1002280331</td>
      <td>3197899231</td>
    </tr>
    <tr>
      <th>Salomé hincapié</th>
      <td>salitohpe@gmail.com</td>
      <td>1011390126</td>
      <td>3196700004</td>
    </tr>
  </tbody>
</table>
    </div>
  );
}

export default App;
