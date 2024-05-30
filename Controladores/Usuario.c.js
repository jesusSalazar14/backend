class ControlesUsuario {
    getAll(req, res) {
      res.send('Obtener todos los usuarios');
    }
//--------------------------------------------------------------
    getById(req, res) {
      const { id } = req.params;
      res.send(`Obtener usuario con ID ${id}`);
    }
//--------------------------------------------------------------
    create(req, res) {
      const { body } = req;
      res.send('Crear un nuevo usuario');
    }
//--------------------------------------------------------------
    update(req, res) {
      const { id } = req.params;
      const { body } = req;
      res.send(`Actualizar usuario con ID ${id}`);
    }
//--------------------------------------------------------------
  
    delete(req, res) {
      const { id } = req.params;
      res.send(`Eliminar usuario con ID ${id}`);
    }
  }
//--------------------------------------------------------------
 
  module.exports = new ControlesUsuario();
  