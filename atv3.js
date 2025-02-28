class Cliente {
    #cpf;
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#cpf = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get pegarCpf() {
        return this.#cpf;
    }

    get nomeMaiusculo() {
        return this.nome.toUpperCase();
    }

    get nomeMinusculo() {
        return this.nome.toLowerCase();
    }

    get enderecoMaiusculo() {
        return this.endereco.toUpperCase();
    }

    get enderecoMinusculo() {
        return this.endereco.toLowerCase();
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }
}

class Telefone {
    constructor(DDD, numero) {
        this.DDD = DDD;
        this.numero = numero;
    }

    get telefoneFormatado() {
        return `(${this.DDD}) ${this.numero}`;
    }
}

class Endereco {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }

    get EnderecoMaiusculo() {
        return `${this.estado.toUpperCase()} - ${this.cidade.toUpperCase()}, ${this.rua.toUpperCase()} N°: ${this.numero}`;
    }

    get EnderecoMinusculo() {
        return `${this.estado.toLowerCase()} - ${this.cidade.toLowerCase()}, ${this.rua.toLowerCase()} n°: ${this.numero}`;
    }
}

class Empresa {
    #cnpj;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set();
    }

    get pegarCnpj() {
        return this.#cnpj;
    }

    adicionarCliente(cliente) {
        this.clientes.add(cliente);
    }

    adicionarTelefone(telefone) {
        this.telefones.add(telefone);
    }

    gerarDescricao() {
        let descricao = `Razão Social: ${this.razaoSocial}\nNome Fantasia: ${this.nomeFantasia}\n`;
        descricao += `Endereço: ${this.endereco.EnderecoMaiusculo}\n`;
        descricao += "-----------------------------\n";

        this.clientes.forEach(cliente => {
            descricao += `Nome: ${cliente.nome}\n`;
            descricao += `Endereço: ${cliente.endereco.EnderecoMaiusculo}\n`;
            cliente.telefones.forEach(telefone => {
                descricao += `DDD: ${telefone.DDD} Número: ${telefone.numero}\n`;
            });
            descricao += "-----------------------------\n";
        });

        return descricao;
    }
}

const enderecoEmpresa = new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987");
const empresa = new Empresa("ABC LTDA", "Mercado Online", "12.345.678/0001-99", enderecoEmpresa);

const cliente1 = new Cliente("João", "123.456.789-00", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "987"));
cliente1.adicionarTelefone(new Telefone("12", "99999999"));
cliente1.adicionarTelefone(new Telefone("12", "988051794"));

const cliente2 = new Cliente("Gabriel", "987.654.321-00", new Endereco("SP", "São José dos Campos", "Av Andrômeda", "412"));
cliente2.adicionarTelefone(new Telefone("12", "956286450"));
cliente2.adicionarTelefone(new Telefone("12", "88887777"));

empresa.adicionarCliente(cliente1);
empresa.adicionarCliente(cliente2);

console.log(empresa.gerarDescricao());
