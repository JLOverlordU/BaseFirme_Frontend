# 📊 BaseFirme Frontend - Sistema de Stock Rápido

Este es el **frontend** del sistema de stock rápido, desarrollado en **Vue.js** con **CoreUI** como plantilla de interfaz. El objetivo principal de este sistema es ofrecer una plataforma intuitiva y eficiente para la administración de productos, ventas, compras y usuarios en tiempo real.

---

## 🚀 Tecnologías Utilizadas

- **Vue.js*
- **Vue Router**
- **Vuex** (gestión de estado)
- **Axios** (consumo de API REST)
- **Bootstrap**

---

## 📁 Estructura del Proyecto

```plaintext
src/
├── assets/             # Recursos estáticos (imágenes, estilos)
├── components/         # Componentes globales
├── containers/         # Layouts generales del sistema
├── router/             # Definición de rutas
├── store/              # Estado global (Vuex)
├── views/              # Vistas agrupadas por módulos
│   ├── administrable/
│   ├── caja/
│   ├── maestras/
│   ├── modals/
│   ├── pages/
│   │   ├── Page404.vue
│   │   └── Login.vue
│   ├── products/
│   ├── purchases/
│   └── sales/
├── App.vue             # Componente raíz
└── main.js             # Punto de entrada
