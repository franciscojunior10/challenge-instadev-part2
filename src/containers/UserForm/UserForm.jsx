import React, { useState } from 'react';

import SuccessMessage from '../../components/SuccessMessage';

import {post} from '../../utils/featchAPI'

import defatulImage from '../../assets/img/profile-placeholder.png'

import './UserForm.scss';

const UserForm = () => {

  const [name,setName] = useState("John D")
  const [username,setusername] = useState("johndo")
  const [email,setEmail] = useState("johndoe@gmail.com")
  const [avatar, setAvatar] = useState("")
  const [urlPhoto,setUrlPhoto] = useState("")
  const [submit, setSubmit] = useState(false)
  const [err, setErr] = useState('')

  function onMatchURL(url){
    setUrlPhoto(url)
    const regex = /(http(s?):)([/|.|\w|\s|-])*/g
    if(url.match(regex)){
      setAvatar(url)
    }
    else{
    setAvatar("")
    }
  }

  const handleAddUser = (event) => {
    event.preventDefault();

    const postObject = JSON.stringify({
      name,
      avatar,
      username,
      email,
    });

    post('https://5e7d0266a917d70016684219.mockapi.io/api/v1/users',postObject)
    .then((res)=>{
      if(res.ok){
        setSubmit(true)
       }else{
         throw new Error("Não foi possível cadastrar o novo usuário")
       }
      })
    .catch(err =>{
      setErr(err.message)
    })
  };

  return (
    <React.Fragment>
      <section className="profile" data-testid="user-form">
        <div className="container">
          <div className="profile-data">
            <div className="user">
              <div className="user__thumb">
                {avatar
                  ? <img src={avatar} alt="" />
                  : <img src={defatulImage} alt="" />
                }
              </div>

              {name && (
                <p className="user__name">
                  {name}
                  <span>@{username}</span>
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="post__form">
        <div className="container">
          <div className="post__form__wrapper">
            <label htmlFor="">Nome</label>
            <input type="text" placeholder="Ex: Fulano da Silva" value={name} onChange={(e)=>setName(e.target.value)}/>
            <label htmlFor="">Usuário</label>
            <input type="text" placeholder="Ex: Fulano_da_Silva" value={username} onChange={(e)=>setusername(e.target.value)}/>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="Ex: fulano@provedor.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <label htmlFor="">Url da Imagem de Perfil (use a url da imagem do Linkedin)</label>
            <input type="text" placeholder="http://" value={urlPhoto} onChange={(e)=>onMatchURL(e.target.value)}/>

            <button
             onClick={(event) => handleAddUser(event)}
             >Cadastrar</button>
          </div>
        </div>
      </section>
      {
      submit &&
       (<SuccessMessage />)
       }
    </React.Fragment>
  );
};

export default UserForm;
