/* eslint-disable camelcase */
import React, { useState, useEffect, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Error } from './styles';

interface IUser {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  html_url: string;
  followers: number;
  following: number;
}

const Dashboard: React.FC = () => {
  const [newUser, setNewUser] = useState('');
  const [findUser, setFindUser] = useState('');
  const [inputAddError, setInputAddError] = useState('');
  const [inputFindError, setInputFindError] = useState('');
  const [users, setUsers] = useState<IUser[]>(() => {
    const storagedUsers = localStorage.getItem('@TestWA:users');

    if (storagedUsers) {
      return JSON.parse(storagedUsers);
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('@TestWA:users', JSON.stringify(users));
  }, [users]);

  const handleAddUser = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    if (!newUser) {
      setInputAddError('Digite o login do usuário.');
      return;
    }

    try {
      const response = await api.get(`/users/${newUser}`);

      const user = response.data;

      setUsers([...users, user]);
      setNewUser('');
      setInputAddError('');
    } catch (err) {
      setInputAddError('Erro ao buscar usuário.');
    }
  };

  const handleFindUser = (e: FormEvent): void => {
    e.preventDefault();

    if (!findUser) {
      setInputFindError('Digite o login do usuário.');
      return;
    }

    setFindUser('');
    setInputFindError('');
  };

  return (
    <Container>
      <h1>Explore usuários no Github.</h1>

      <form onSubmit={handleAddUser} className="addUser">
        <input
          value={newUser}
          onChange={e => setNewUser(e.target.value)}
          placeholder="Digite o login do usuário"
        />
        <button type="submit">Adicionar usuário</button>
      </form>
      {inputAddError && <Error>{inputAddError}</Error>}

      <form onSubmit={handleFindUser} className="findUser">
        <input
          value={findUser}
          onChange={e => setFindUser(e.target.value)}
          placeholder="Digite o login do usuário"
        />
        <button type="submit">Pesquisar</button>
      </form>
      {inputFindError && <Error>{inputFindError}</Error>}

      <div className="users">
        {users
          .filter(user => user.login.includes(findUser))
          .map(user => (
            <a key={user.login} href={user.html_url}>
              <img src={user.avatar_url} alt={user.login} />
              <div className="userInfo">
                <strong>{user.login}</strong>
                <div>
                  <span>
                    nodeId:
                    {user.node_id}
                  </span>
                  <span>
                    userId:
                    {user.id}
                  </span>
                </div>
                <div>
                  <span>
                    followers:
                    {user.followers}
                  </span>
                  <span>
                    follwing:
                    {user.following}
                  </span>
                </div>
              </div>
              <FiChevronRight size={24} />
            </a>
          ))}
      </div>
    </Container>
  );
};

export default Dashboard;
