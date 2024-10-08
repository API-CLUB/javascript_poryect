# PageCraft

## 🚀 **Briefing del Proyecto: PageCraft**

### **Contexto**

La empresa tiene como objetivo lanzar **PageCraft**, una aplicación que permita a pequeños comercios locales y de proximidad tener una presencia en internet de manera fácil y accesible. La meta es que los usuarios sin conocimientos técnicos puedan crear una página web personalizada que represente su negocio.

### **Objetivo del Proyecto**

Desarrollar una **prueba de concepto** de un personalizador de páginas web. Este personalizador será la base del **Producto Mínimo Viable (MVP)** que permitirá a los usuarios modificar el diseño y contenido de su página web de manera **dinámica**. Los usuarios podrán ajustar visualmente aspectos como colores, fuentes, imágenes y textos, y ver los cambios a través de una vista previa.

**_Ya tenemos una pequeña parte de HTML y CSS implementados así como un objeto de Javascript con los datos iniciales de la aplicación, que representan una pequeña empresa de muestra._**

---

## 🚀 **Cómo empezar**

1. **Usar la plantilla en tu organización:**
   - Haz clic en el botón **"Use this template"** (Usar esta plantilla) en la parte superior del repositorio.
   - Selecciona tu **organización** o el repositorio del equipo donde deseas crear una copia del proyecto.
2. **Clonar el repositorio:**

   - Clona el repositorio en tu máquina local usando el siguiente comando:

     ```bash
     git clone https://github.com/[tu-organización]/pagecraft.git
     ```

3. **Ejecutar el proyecto en Visual Studio Code con Live Server:**
   - Abre el proyecto en **Visual Studio Code**.
   - Instala la extensión **Live Server** (si no la tienes instalada) desde el marketplace de VSCode.
   - Haz clic derecho en el archivo `index.html` y selecciona **"Open with Live Server"**.
   - ¡Ahora deberías ver la aplicación funcionando en tu navegador!

---

## 📖 **User Stories**

## **Épica 1: Mostrar la información de la empresa de ejemplo desde un objeto JavaScript**

Esta épica abarca representar la información de la empresa de ejemplo en el HTML desde un objeto de JavaScript.

### **Historia 1.1: Mostrar el nombre de la empresa en el logo y el título del navegador**

**Como usuario**, quiero ver el **nombre de la empresa** en el logo y en el título del navegador para identificar la página.

- **Criterios de Aceptación**:
  - El nombre de la empresa debe extraerse del objeto `companyData` y mostrarse en el logo de la página.
  - Debe mostrarse con la primera letra de cada palabra en mayúscula.
  - El nombre de la empresa debe aparecer en el título del navegador.

### **Historia 1.2: Mostrar la imagen en el componente Hero**

**Como usuario**, quiero ver la **imagen de la empresa** en el componente **Hero** para identificar visualmente la empresa.

- **Criterios de Aceptación**:
  - La imagen de la empresa debe extraerse del objeto `companyData` y mostrarse en el componente Hero.

### **Historia 1.3: Mostrar el claim y el texto principal de la empresa**

**Como usuario**, quiero ver el **claim** y el **texto principal** de la empresa en el componente **Hero** para comprender el mensaje clave de la empresa.

- **Criterios de Aceptación**:
  - El claim debe extraerse del objeto `companyData` y mostrarse en el componente Hero.
  - El texto principal de la empresa debe extraerse del objeto `companyData` y mostrarse en el componente Hero.

### **Historia 1.4: Personalización de los colores de la página**

**Como usuario**, quiero que los **colores** de la página web se ajusten automáticamente a los valores definidos en el objeto `companyData` para mantener la identidad visual de la empresa.

- **Criterios de Aceptación**:
  - El color de fondo de la página debe extraerse del objeto `companyData.backgroundColor`.
  - El color principal de la página debe extraerse del objeto `companyData.primaryColor`.

---

## 💻 **Épica 2: Personalización dinámica de la página web**

Esta épica cubre la personalización de la información de la empresa a través de un formulario y la actualización de la página al guardar los cambios.

### **Historia 2.1: Crear el botón para abrir y cerrar el formulario**

**Como usuario**, quiero tener un botón para abrir y cerrar el formulario de personalización para modificar la información de la empresa.

- **Criterios de Aceptación**:
  - Debe haber un botón visible en la sección que abra el formulario de personalización.
  - El formulario debe tener un botón para cerrarlo, que al hacer clic cierre el formulario.

### **Historia 2.2: Cargar los datos actuales de la empresa en el formulario**

**Como usuario**, quiero que los **campos del formulario** estén pre-poblados con la información de la empresa actual para poder ver y modificar los datos.

- **Criterios de Aceptación**:
  - Los campos del formulario deben mostrar los valores actuales del objeto `companyData` (nombre, claim, imagen, colores).
  - Los campos deben ser editables para que el usuario pueda modificar la información.

### **Historia 2.3: Editar los datos de la empresa en el formulario**

**Como usuario**, quiero poder modificar los **datos de la empresa** en el formulario (nombre, imagen, claim, texto y colores) para personalizar la información mostrada en la página.

- **Criterios de Aceptación**:
  - El formulario debe permitir al usuario editar el nombre, claim, imagen y colores.
  - Los valores modificados no deben actualizarse en la web mientras se editan.

### **Historia 2.4: Guardar los cambios en el formulario**

**Como usuario**, quiero que los **cambios** realizados en el formulario se guarden y se apliquen a la página web al hacer clic en el botón **Save**.

- **Criterios de Aceptación**:
  - La página HTML debe reflejar los cambios después de hacer clic en **Save**.
  - El formulario debe cerrarse al hacer clic en el botón Save.
  - Si se cierra el formulario sin hacer clic en **Save**, los cambios no deben reflejarse en la página.

---

## 🛍️ **Épica: Personalización de la sección "Novedades y Ofertas"**

El objetivo de esta épica es permitir a los usuarios visualizar y personalizar una sección de la página web que muestra tres ofertas o productos destacados. Cada producto incluirá una **imagen**, un **nombre** y un **precio**, y se cargará inicialmente desde un array de objetos JavaScript.

La personalización se llevará a cabo mediante un **formulario** que permitirá a los usuarios modificar estos datos (URL de la imagen, nombre y precio) y reflejar los cambios en la interfaz de la página una vez guardados.

Ahora, propongan las **historias de usuario** que consideren necesarias para implementar la **sección de "Novedades y Ofertas"**, y definan también los **criterios de aceptación** y las **tareas** que deben completarse.

### Pautas

1. **Historias de usuario**: Piensen en cómo quieren que el usuario final interactúe con esta sección. ¿Qué debería poder hacer el usuario? Por ejemplo, visualizar los productos, modificar los detalles de los productos, guardar los cambios, etc.
2. **Criterios de aceptación**: Definan claramente las condiciones que deben cumplirse para que la historia de usuario se considere terminada. Ejemplos: "Los cambios en el formulario deben reflejarse inmediatamente en la página después de hacer clic en 'Guardar'".
3. **Tareas**: Detallen las acciones concretas que deben realizar para cumplir con cada historia de usuario. Esto puede incluir cosas como:
   - Crear el array de productos.
   - Imprimir los productos en el HTML.
   - Implementar el formulario de personalización.
   - Actualizar el array y la interfaz de la página al hacer clic en "Guardar".

Cada historia debe representar una funcionalidad específica que los usuarios puedan realizar en la sección.

## 💾 **Funcionalidad Extra: Uso de Local Storage**

Una funcionalidad adicional es el uso de **Local Storage** para **persistir los datos** de la empresa en el navegador. Esto permitirá que, aunque el usuario cierre la página o recargue el navegador, los datos de la empresa (nombre, claim, colores, etc.) se mantengan guardados.

---

## 🗞️ Licencia

Este proyecto está licenciado bajo la [MIT License](./LICENSE).

Se permite el uso, copia, modificación y distribución del código, siempre y cuando se otorgue la atribución adecuada a **Sergi Virgili** y a **Factoría F5** y se incluya una copia de la licencia en cualquier redistribución.
