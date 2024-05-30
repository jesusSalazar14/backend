class ControlesDeCoperativa {
    getAll(req, res) {
      res.send('Obtener todas las cooperativas');
    }
//--------------------------------------------------------------
    getById(req, res) {
      const { id } = req.params;
      res.send(`Obtener cooperativa con ID ${id}`);
    }
//--------------------------------------------------------------  
    create(req, res) {
      const { body } = req;
      res.send('Crear una nueva cooperativa');
    }
//--------------------------------------------------------------  
    update(req, res) {
      const { id } = req.params;
      const { body } = req;
      res.send(`Actualizar cooperativa con ID ${id}`);
    }
//--------------------------------------------------------------  
    delete(req, res) {
      const { id } = req.params;
      res.send(`Eliminar cooperativa con ID ${id}`);
    }
  }
  
  module.exports = new ControlesDeCoperativa();
  