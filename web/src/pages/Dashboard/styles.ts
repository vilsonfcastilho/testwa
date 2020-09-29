import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 48px;
    color: #3a3a3a;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
  }

  .addUser {
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
      flex: 1;
      height: 70px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 210px;
      height: 70px;
      border: 0;
      border-radius: 0 5px 5px 0;
      background: #04d361;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#04d361')};
      }
    }
  }

  .findUser {
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
      flex: 1;
      height: 50px;
      padding: 0 24px;
      border: 0;
      border-radius: 5px 0 0 5px;
      color: #3a3a3a;

      &::placeholder {
        color: #a8a8b3;
      }
    }

    button {
      width: 210px;
      height: 50px;
      border: 0;
      border-radius: 0 5px 5px 0;
      background: #3dadf2;
      color: #fff;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background: ${shade(0.2, '#3DADF2')};
      }
    }
  }

  .users {
    display: flex;
    flex-direction: column;
    margin-top: 80px;
    max-width: 700px;

    a {
      display: flex;
      flex: 1;
      align-items: center;
      text-decoration: none;
      padding: 20px;
      background: #fff;
      border-radius: 5px;
      transition: transform 0.2s;

      & + a {
        margin-top: 16px;
      }

      &:hover {
        transform: translateX(10px);
      }

      img {
        margin-top: 8px;
        width: 64px;
        height: 64px;
        border-radius: 50%;
      }

      .userInfo {
        display: flex;
        flex: 1;
        flex-direction: column;
        margin: 0 20px;

        strong {
          margin-right: 30px;
          font-size: 20px;
          color: #3d3d4d;
        }

        div {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-top: 6px;

          span {
            margin-right: 30px;
            font-size: 18px;
            color: #a8a8b3;
          }
        }
      }

      svg {
        color: #a8a8b3;
      }
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #ff6666;
  margin-left: 4px;
  margin-top: 8px;
`;
