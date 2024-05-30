class ControlesDeAhorros {
    getAll(req, res) {
      res.send('Obtener todos los ahorros');
    }
//--------------------------------------------------------------  
    getById(req, res) {
      const { id } = req.params;
      res.send(`Obtener ahorros con ID ${id}`);
    }
//--------------------------------------------------------------  
    create(req, res) {
      const { body } = req;
      res.send('Crear un nuevo ahorro');
    }
//--------------------------------------------------------------  
    update(req, res) {
      const { id } = req.params;
      const { body } = req;
      res.send(`Actualizar ahorro con ID ${id}`);
    }
//--------------------------------------------------------------
    delete(req, res) {
      const { id } = req.params;
      res.send(`Eliminar ahorro con ID ${id}`);
    }
  }
  
  module.exports = new ControlesDeAhorros();
  