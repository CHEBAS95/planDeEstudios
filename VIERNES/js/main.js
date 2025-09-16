// Selectores con nombres más descriptivos
const contactForm = document.getElementById('contact-form');
// const familyMembersList = document.querySelector('.family-members');

// Validación profesional
const validateInput = (input, rules) => {
  const errors = [];
  const value = input.value.trim();
  
  if(rules.required && !value) {
    errors.push('Este campo es obligatorio');
  }
  
  if(rules.minLength && value.length < rules.minLength) {
    errors.push(`Mínimo ${rules.minLength} caracteres`);
  }
  
  if(rules.type === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
    errors.push('Ingrese un email válido');
  }
  
  return errors;
};

// Manejo profesional de eventos
const setupEventListeners = () => {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const errors = validateForm(formData);
    
    if(Object.keys(errors).length === 0) {
      try {
        // Envío profesional con feedback al usuario
        await submitForm(formData);
        showSuccessMessage();
      } catch (error) {
        showErrorMessage(error);
      }
    } else {
      displayFormErrors(errors);
    }
  });
  
//   // Menú interactivo profesional
//   familyMembersList.addEventListener('click', (e) => {
//     if(e.target.closest('.member-item')) {
//       toggleMemberDetails(e.target);
//     }
//   });
// };

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
})};