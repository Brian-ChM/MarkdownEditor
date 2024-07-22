import { create } from 'zustand'

interface TextState {
  text: string
  setText: (newText: string) => void
}

const initialText = `
# Encabezados

# Encabezado 1
## Encabezado 2
### Encabezado 3
#### Encabezado 4
##### Encabezado 5
###### Encabezado 6

---

# Estilos de texto

**Negrita**

*Cursiva*

***Negrita y cursiva***

~~Tachado~~

---

# Listas

## Lista desordenada

- Elemento 1
- Elemento 2
  - Sub-elemento 1
  - Sub-elemento 2

## Lista ordenada

1. Elemento 1
2. Elemento 2
   1. Sub-elemento 1
   2. Sub-elemento 2

---

# Citas

> Esta es una cita.

---

# Enlaces

[Enlace en línea](https://www.ejemplo.com)

[Enlace con título](https://www.ejemplo.com "Título del enlace")

---

# Imágenes

![Texto alternativo](https://geekytheory.com/content/images/2014/03/markdown_inte-1024x630.png)

![Texto alternativo con título](https://geekytheory.com/content/images/2014/03/markdown_inte-1024x630.png "Título de la imagen")

---

# Código

## En línea

\`Código en línea\`

## Bloque de código

\`\`\`
Código en un bloque
\`\`\`

## Bloque de código con lenguaje especificado

\`\`\`javascript
console.log('Hola, mundo');
\`\`\`

---

# Tablas

| Encabezado 1 | Encabezado 2 |
| ------------ | ------------ |
| Celda 1      | Celda 2      |
| Celda 3      | Celda 4      |

---

# Tareas

- [x] Tarea completada
- [ ] Tarea incompleta

---

# Separadores

---

---

# HTML en Markdown

<p>Esto es un párrafo en HTML.</p>

---

# Anidar elementos

- **Elemento en negrita**
  - *Sub-elemento en cursiva*

> **Cita en negrita**
> 
> - Lista dentro de una cita

---

# Escapando caracteres

\\*Este texto no será cursiva\\*

\\# Este texto no será un encabezado

---

# Formato de texto adicional

Superíndice: $19^{\\text{th}}$

Subíndice: $H_2O$

---

# Matemáticas

$$
E = mc^2
$$

$$
(sum_{i=1}^{n} i^2)
$$

---
`;

const useTextStore = create<TextState>()((set) => ({
  text: initialText,
  setText: (newText) => set((state) => ({ text: newText })),
}));

export default useTextStore