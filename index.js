document.getElementById('submit').addEventListener('click', async (e) => {
  const firstName = document.getElementById('first_name');
  const lastName = document.getElementById('last_name');
  const email = document.getElementById('email');
  const organizationType = document.getElementById('00N5Y00000TsLi4');
  const region = document.getElementById('00N5Y00000TsLiT');
  const company = document.getElementById('company');
  const role = document.getElementById('title');
  const industryType = document.getElementById('industry');
  const heardAbout = document.getElementById('00N5Y00000TsLhp');
  const tellMore = document.getElementById('tellMore');

  const results = await Promise.all([
    isValidName(firstName),
    isValidName(lastName),
    isValidEmail(email),
    isValidValue(organizationType),
    isValidValue(region),
    isValidValue(industryType),
    isValidValue(heardAbout),
    isValidValue(company),
    isValidValue(role),
    isValidValue(tellMore)
  ]);

  const hasErrors = results.reduce((partialSum, item) => partialSum + item, 0);
  if(hasErrors) {
    console.log('Não salvar os dados');
    e.preventDefault();
  }
});


const setRequiredFieldAlert = (field) => {
  field.style.borderColor = field.value ? '#666666' : 'rgba(240, 83, 62, 1)';

  return !!field.value;
}

const isValidName = (field) => {
  if(field.value.match(/[0-9]/) || !field.value) {
    field.value = '';
  }
  setRequiredFieldAlert(field);
  
  return !field.value ? 'Invalid Name!' : false;
} 

const isValidEmail = (field) => {
  if(!field.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi) || !field.value) {
    field.value = '';
  }
  setRequiredFieldAlert(field);

  return !field.value ? 'Invalid Email!' : false;
}

const isValidValue = (field) => {
  setRequiredFieldAlert(field);

  return !field.value ? 'Picklist value empty' : false;
}

const handleInputs = () => {
  const elements = [
    document.getElementById('first_name'),
    document.getElementById('last_name'),
    document.getElementById('email'),
    document.getElementById('00N5Y00000TsLi4'),
    document.getElementById('00N5Y00000TsLiT'),
    document.getElementById('company'),
    document.getElementById('title'),
    document.getElementById('industry'),
    document.getElementById('00N5Y00000TsLhp'),
    document.getElementById('tellMore'),
  ];

  elements.forEach((item) => {
    item.addEventListener('click', ({ target }) => {
      const { value } = target;
      
      if (!value) {
        target.style.borderColor = '#666666';
      }
    });

    item.addEventListener('focusout', ({ target }) => {
      const { value } = target;
      
      if (!value) {
        target.style.borderColor = 'rgba(240, 83, 62, 1)';
      }
    });
  });
};

handleInputs();
