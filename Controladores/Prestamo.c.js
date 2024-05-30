class ControlesDePrestamo {
    getAll(req, res) {
      res.send('Obtener todos los préstamos');
    }
//--------------------------------------------------------------
    getById(req, res) {
      const { id } = req.params;
      res.send(`Obtener préstamo con ID ${id}`);
    }
//--------------------------------------------------------------
    create(req, res) {
      const { body } = req;
      res.send('Crear un nuevo préstamo');
    }
//--------------------------------------------------------------
    update(req, res) {
      const { id } = req.params;
      const { body } = req;
      res.send(`Actualizar préstamo con ID ${id}`);
    }
//-------------------------------------------------------------- 
    delete(req, res) {
      const { id } = req.params;
      res.send(`Eliminar préstamo con ID ${id}`);
    }
  }
 
  module.exports = new ControlesDePrestamo();
  