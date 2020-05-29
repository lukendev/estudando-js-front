const nomePetshop = "Petshop DH";
const body = document.querySelector('body')
const divTela = document.querySelector('#tela')
const btnClick = document.getElementById('acao')
const btnAddPet = document.getElementById('btnAddPet')
const btnListarPet = document.getElementById('btnListarPet')

const h1Titulo = document.createElement('h1')
h1Titulo.innerText = nomePetshop
h1Titulo.style.textAlign = 'center'
body.insertBefore(h1Titulo, divTela)
// body.innerHTML += `<h1>${nomePetshop} </h1>`
// document.querySelector('h1').style.textAlign = 'center'


console.log(`** ${nomePetshop} **`);


let pets = [
  {
    nome: "Batman",
    tipo: "cão",
    raca: "labrador",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Costelinha",
    tipo: "cão",
    raca: "vira-lata",
    idade: 10,
    genero: "M",
    vacinado: true,
    servicos: ["banho"]
  },
  {
    nome: "Scooby Doo",
    tipo: "cão",
    raca: "Dogue Alemão",
    idade: 51,
    genero: "M",
    vacinado: false,
    servicos: ["banho", "tosa"]
  },
  {
    nome: "Tom",
    tipo: "gato",
    raca: "poodle",
    idade: 5,
    genero: "M",
    vacinado: false,
    servicos: ["corte de unha"]
  },
  {
    nome: "Ada",
    tipo: "iguana",
    raca: "albina",
    idade: 5,
    genero: "F",
    vacinado: true,
    servicos: ["banho"]
  }
];

const contarVacinados = () => {
  let vacinados = pets.filter(pet => pet.vacinado).length;
  let naoVacinados = pets.filter(pet => !pet.vacinado).length;

  console.log(`
  ------------------------
  Temos ${vacinados} pets vacinados.
  Temos ${naoVacinados} pets NÃO vacinados.
  ------------------------
  `);
};

const listarPets = () => {
  divTela.innerHTML = ""
  for (let pet of pets) {

    divTela.innerHTML += `
    <ul>

      <li class="nome"><span class="titulo">Nome</span>: ${pet.nome}</li>
      <li><span class="titulo">Tipo</span>: ${pet.tipo}</li>
      <li><span class="titulo">Raça</span>: ${pet.raca}</li>
      <li><span class="titulo">Idade:</span> ${pet.idade} anos</li>
      <li><span class="titulo">Genero</span>: ${pet.genero == "F" ? "femea" : "macho"}</li>
      <li><span class="titulo">Vacinado</span>: ${pet.vacinado ? "sim" : "não"}</li>
      <li><span class="titulo">Serviços</span>: ${pet.servicos}</li>

    </ul>
    `
    console.log(`
    ------------------------
    Nome: ${pet.nome}
    Tipo: ${pet.tipo}
    Raça: ${pet.raca}
    Idade: ${pet.idade} anos
    Genero: ${pet.genero == "F" ? "femea" : "macho"}
    Vacinado: ${pet.vacinado ? "sim" : "não"}
    Serviços: ${pet.servicos}
    `);
  }
  nomePet()
  console.log("------------------------");
}

const deixarVermelho = () =>{
  titulo = document.querySelectorAll('.titulo');
  titulo.forEach(element => {
    element.style.color = 'red';
  })
}

const vacinarPet = pet => {
  if (!pet.vacinado) {
    pet.vacinado = true;
    console.log(`${pet.nome} foi vacinado com sucesso!`);
  } else {
    console.log(`Ops, ${pet.nome} já está vacinado!`);
  }
};

const campanhaVacina = () => {
  console.log("Campanha de vacina 2020");
  console.log("vacinando...");

  let petVacinadosCampanha = 0;
  for (let pet of pets) {
    if (!pet.vacinado) {
      vacinarPet(pet);
      petVacinadosCampanha++;
    }
  }
  console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
};

const validarDados = novoPet => {
  return (
    novoPet.nome &&
    novoPet.idade &&
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.genero
  );
};


const adicionarPet = ()  => {
  novoPet = {
    nome: prompt("Qual o nome do pet?"),
    idade: prompt("Qual a idade do pet?"),
    tipo: prompt("Qual o tipo do pet?"),
    raca: prompt("Qual a raça do pet?"),
    genero: prompt("Qual o genero do pet?")
  }

  if (validarDados(novoPet)) {
    // adiciona o pet
    novoPet.nome = String(novoPet.nome);
    novoPet.idade = parseInt(novoPet.idade);

    if (!novoPet.servicos) {
      novoPet.servicos = [];
    }

    pets.push(novoPet);
    document.querySelector('#tela').innerHTML = "<h1>Pet " +  novoPet.nome + " adicionado com sucesso!</h1>"

  } else {
    document.querySelector('h1').innerText = "Ops, insira um argumento valido!";
  }
};


const darBanhoPet = pet => {
  pet.servicos.push("banho");
  console.log(`${pet.nome} está de banho tomado!`);
};

const tosarPet = pet => {
  pet.servicos.push("tosa");
  console.log(`${pet.nome} está com cabelinho na régua :)`);
};

const apararUnhasPet = pet => {
  pet.servicos.push("corte de unhas");
  console.log(`${pet.nome} está de unhas aparadas!`);
};

const atenderPet = (pet, servicos) => {
  console.log(`Bem vindo, ${pet.nome}`);

  for (let i = 0; i < servicos.length; i++) {
    servicos[i](pet);
  }

  const pagar = () => {
    console.log("Pagamento realizado com sucesso!");
  };

  pagar();

  console.log(`Volte sempre, ${pet.nome}`);
};

// listarPets();
contarVacinados();

function oi(){
  document.getElementById('teste').style.display = 'none'
}

btnAddPet.addEventListener('click', () =>{
  adicionarPet()
})

btnListarPet.onclick = () => {
  listarPets()
}

function nomePet() {
  const listaNome = document.querySelectorAll(".nome");
  listaNome.forEach((item) => {
    item.onmouseover = () => {
      item.style.cssText = "font-size:20px; color:blue";
    };

    item.onmouseout = () => {
      item.style.cssText = "font-size:16px; color:black";
    };
  });
}



// const destaqueNome = document.querySelectorAll('.nomePet')
// destaqueNome.forEach((item) => {
//   item.onmouseover = () => {
//     item.style.cssText = "font-size: 20; color: blue"
//   }

//   item.onmouseout = () => {
//     item.style.cssText = "font-size: 16; color: black"
//   }
// })

// btnClick.addEventListener("mouseover", () => {
//   alert('Estou dentro do botão')
// });

// btnClick.addEventListener("click", () => {
//   alert('Estou dentro do botão')
// });
// btnClick.onclick = () => {
//   alert('Estou dentro do botao')
// }
