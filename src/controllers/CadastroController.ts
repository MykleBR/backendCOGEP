// src/controllers/CadastroController.ts
import { Request, Response } from 'express';
import Pessoa from '../models/Pessoa';
import Atividade from '../models/Atividade';

class CadastroController {
  // Método para cadastrar uma nova pessoa
  static async cadastrarPessoa(req: Request, res: Response) {
    try {
      const { nome, telefone, email, endereco } = req.body;

      // Verificar se a pessoa já existe pelo e-mail
      const pessoaExistente = await Pessoa.findOne({ where: { email } });

      if (pessoaExistente) {
        return res.status(400).json({ message: 'Pessoa já cadastrada com esse e-mail' });
      }

      // Criar uma nova pessoa
      const novaPessoa = await Pessoa.create({
        nome,
        telefone,
        email,
        endereco,
      });

      return res.status(201).json(novaPessoa);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao cadastrar pessoa' });
    }
  }

  // Método para atualizar uma pessoa existente
  static async atualizarPessoa(req: Request, res: Response) {
    try {
      const pessoaId = req.params.id;
      const { nome, telefone, email, endereco } = req.body;

      // Verificar se a pessoa existe
      const pessoaExistente = await Pessoa.findByPk(pessoaId);

      if (!pessoaExistente) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
      }

      // Atualizar a pessoa
      await pessoaExistente.update({
        nome,
        telefone,
        email,
        endereco,
      });

      return res.status(200).json({ message: 'Pessoa atualizada com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao atualizar pessoa' });
    }
  }

  // Método para excluir uma pessoa existente
  static async excluirPessoa(req: Request, res: Response) {
    try {
      const pessoaId = req.params.id;

      // Verificar se a pessoa existe
      const pessoaExistente = await Pessoa.findByPk(pessoaId);

      if (!pessoaExistente) {
        return res.status(404).json({ message: 'Pessoa não encontrada' });
      }

      // Excluir a pessoa
      await pessoaExistente.destroy();

      return res.status(200).json({ message: 'Pessoa excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao excluir pessoa' });
    }
  }

  // Método para listar todas as pessoas
  static async listarPessoas(req: Request, res: Response) {
    try {
      const pessoas = await Pessoa.findAll();
      return res.status(200).json(pessoas);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao listar pessoas' });
    }
  }

  // Método para cadastrar uma nova atividade
  static async cadastrarAtividade(req: Request, res: Response) {
    try {
      const { nome, descricao, dataInicio, dataFim, dataCriacao } = req.body;

      // Criar uma nova atividade
      const novaAtividade = await Atividade.create({
        nome,
        descricao,
        dataInicio,
        dataFim,
        dataCriacao,
      });

      return res.status(201).json(novaAtividade);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao cadastrar atividade' });
    }
  }

  // Método para atualizar uma atividade existente
  static async atualizarAtividade(req: Request, res: Response) {
    try {
      const atividadeId = req.params.id;
      const { nome, descricao, dataInicio, dataFim, dataCriacao } = req.body;

      // Verificar se a atividade existe
      const atividadeExistente = await Atividade.findByPk(atividadeId);

      if (!atividadeExistente) {
        return res.status(404).json({ message: 'Atividade não encontrada' });
      }

      // Atualizar a atividade
      await atividadeExistente.update({
        nome,
        descricao,
        dataInicio,
        dataFim,
        dataCriacao,
      });

      return res.status(200).json({ message: 'Atividade atualizada com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao atualizar atividade' });
    }
  }

  // Método para excluir uma atividade existente
  static async excluirAtividade(req: Request, res: Response) {
    try {
      const atividadeId = req.params.id;

      // Verificar se a atividade existe
      const atividadeExistente = await Atividade.findByPk(atividadeId);

      if (!atividadeExistente) {
        return res.status(404).json({ message: 'Atividade não encontrada' });
      }

      // Excluir a atividade
      await atividadeExistente.destroy();

      return res.status(200).json({ message: 'Atividade excluída com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao excluir atividade' });
    }
  }

  // Método para listar todas as atividades
  static async listarAtividades(req: Request, res: Response) {
    try {
      const atividades = await Atividade.findAll();
      return res.status(200).json(atividades);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Erro ao listar atividades' });
    }
  }
}

export default CadastroController;
