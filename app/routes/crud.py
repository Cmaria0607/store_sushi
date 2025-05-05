from flask import Blueprint, request, jsonify
from app.models.models import Producto, Proveedor, MateriaPrima, Pedido,DetallePedido,db

crud_bp = Blueprint('crud', __name__)

# ------------------- PRODUCTOS -------------------
@crud_bp.route('/productos', methods=['GET'])
def get_productos():
    productos = Producto.query.all()
    return jsonify([{
        'id': p.id,
        'nombre': p.nombre,
        'descripcion': p.descripcion,
        'imagen': p.imagen,
        'precio_venta': float(p.precio_venta)
    } for p in productos])

@crud_bp.route('/productos', methods=['POST'])
def crear_producto():
    data = request.get_json()
    producto = Producto(**data)
    db.session.add(producto)
    db.session.commit()
    return jsonify({'mensaje': 'Producto creado'}), 201

@crud_bp.route('/productos/<int:id>', methods=['PUT'])
def actualizar_producto(id):
    data = request.get_json()
    producto = Producto.query.get(id)
    if not producto:
        return jsonify({'error': 'Producto no encontrado'}), 404

    for key, value in data.items():
        setattr(producto, key, value)
    db.session.commit()
    return jsonify({'mensaje': 'Producto actualizado'}), 200

@crud_bp.route('/productos/<int:id>', methods=['DELETE'])
def eliminar_producto(id):
    producto = Producto.query.get(id)
    if not producto:
        return jsonify({'error': 'Producto no encontrado'}), 404

    db.session.delete(producto)
    db.session.commit()
    return jsonify({'mensaje': 'Producto eliminado'}), 200

# ------------------- PROVEEDORES -------------------
@crud_bp.route('/proveedores', methods=['GET'])
def get_proveedores():
    proveedores = Proveedor.query.all()
    return jsonify([{
        'id': p.id,
        'nombre': p.nombre,
        'contacto': p.contacto,
        'material': p.material
    } for p in proveedores])

@crud_bp.route('/proveedores', methods=['POST'])
def crear_proveedor():
    data = request.get_json()
    proveedor = Proveedor(**data)
    db.session.add(proveedor)
    db.session.commit()
    return jsonify({'mensaje': 'Proveedor creado'}), 201

@crud_bp.route('/proveedores/<int:id>', methods=['PUT'])
def actualizar_proveedor(id):
    data = request.get_json()
    proveedor = Proveedor.query.get(id)
    if not proveedor:
        return jsonify({'error': 'Proveedor no encontrado'}), 404

    for key, value in data.items():
        setattr(proveedor, key, value)
    db.session.commit()
    return jsonify({'mensaje': 'Proveedor actualizado'}), 200

@crud_bp.route('/proveedores/<int:id>', methods=['DELETE'])
def eliminar_proveedor(id):
    proveedor = Proveedor.query.get(id)
    if not proveedor:
        return jsonify({'error': 'Proveedor no encontrado'}), 404

    db.session.delete(proveedor)
    db.session.commit()
    return jsonify({'mensaje': 'Proveedor eliminado'}), 200

# ------------------- MATERIA PRIMA -------------------
@crud_bp.route('/materia_prima', methods=['GET'])
def get_materia():
    materias = MateriaPrima.query.all()
    return jsonify([{
        'id': m.id,
        'nombre': m.nombre,
        'cantidad_unidad': m.cantidad_unidad,
        'cantidad_gramos': m.cantidad_gramos,
        'fecha_vencimiento': m.fecha_vencimiento.isoformat(),
        'costo': m.costo,
        'imagen': m.imagen
    } for m in materias])

@crud_bp.route('/materia_prima', methods=['POST'])
def crear_materia():
    data = request.get_json()
    materia = MateriaPrima(**data)
    db.session.add(materia)
    db.session.commit()
    return jsonify({'mensaje': 'Materia Prima creada'}), 201

@crud_bp.route('/materia_prima/<int:id>', methods=['PUT'])
def actualizar_materia(id):
    data = request.get_json()
    materia = MateriaPrima.query.get(id)
    if not materia:
        return jsonify({'error': 'Materia Prima no encontrada'}), 404

    for key, value in data.items():
        setattr(materia, key, value)
    db.session.commit()
    return jsonify({'mensaje': 'Materia Prima actualizada'}), 200

@crud_bp.route('/materia_prima/<int:id>', methods=['DELETE'])
def eliminar_materia(id):
    materia = MateriaPrima.query.get(id)
    if not materia:
        return jsonify({'error': 'Materia Prima no encontrada'}), 404

    db.session.delete(materia)
    db.session.commit()
    return jsonify({'mensaje': 'Materia Prima eliminada'}), 200

# ------------------- PEDIDOS -------------------
@crud_bp.route('/pedidos', methods=['GET'])
def get_pedidos():
    pedidos = Pedido.query.all()
    return jsonify([{
        'id': p.id,
        'fecha': p.fecha.isoformat(),
        'total': p.total
    } for p in pedidos])

@crud_bp.route('/pedidos', methods=['POST'])
def crear_pedido():
    data = request.get_json()
    pedido = Pedido(**data)
    db.session.add(pedido)
    db.session.commit()
    return jsonify({'mensaje': 'Pedido creado'}), 201

@crud_bp.route('/pedidos/<int:id>', methods=['PUT'])
def actualizar_pedido(id):
    data = request.get_json()
    pedido = Pedido.query.get(id)
    if not pedido:
        return jsonify({'error': 'Pedido no encontrado'}), 404

    for key, value in data.items():
        setattr(pedido, key, value)
    db.session.commit()
    return jsonify({'mensaje': 'Pedido actualizado'}), 200

@crud_bp.route('/pedidos/<int:id>', methods=['DELETE'])
def eliminar_pedido(id):
    pedido = Pedido.query.get(id)
    if not pedido:
        return jsonify({'error': 'Pedido no encontrado'}), 404

    db.session.delete(pedido)
    db.session.commit()
    return jsonify({'mensaje': 'Pedido eliminado'}), 200

# ------------------- DETALLE PEDIDO -------------------
@crud_bp.route('/detalle_pedido', methods=['GET'])
def get_detalle_pedido():
    detalles = DetallePedido.query.all()
    return jsonify([{
        'id': d.id,
        'pedido_id': d.pedido_id,
        'producto_id': d.producto_id,
        'cantidad': d.cantidad
    } for d in detalles])

@crud_bp.route('/detalle_pedido', methods=['POST'])
def crear_detalle_pedido():
    data = request.get_json()
    detalle = DetallePedido(**data)
    db.session.add(detalle)
    db.session.commit()
    return jsonify({'mensaje': 'Detalle de pedido creado'}), 201

@crud_bp.route('/detalle_pedido/<int:id>', methods=['PUT'])
def actualizar_detalle_pedido(id):
    data = request.get_json()
    detalle = DetallePedido.query.get(id)
    if not detalle:
        return jsonify({'error': 'Detalle de pedido no encontrado'}), 404

    for key, value in data.items():
        setattr(detalle, key, value)
    db.session.commit()
    return jsonify({'mensaje': 'Detalle de pedido actualizado'}), 200

@crud_bp.route('/detalle_pedido/<int:id>', methods=['DELETE'])
def eliminar_detalle_pedido(id):
    detalle = DetallePedido.query.get(id)
    if not detalle:
        return jsonify({'error': 'Detalle de pedido no encontrado'}), 404

    db.session.delete(detalle)
    db.session.commit()
    return jsonify({'mensaje': 'Detalle de pedido eliminado'}), 200
