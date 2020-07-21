import React, { useState } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';

import BurgerMenu from '../components/BurgerMenu';
import FormCpnt from '../components/FormCpnt';
import InputCpnt from '../components/InputCpnt';
import Button from '../components/Button';
import { MainContainerWithHeader, MainHeader } from '../styles/containers';
import { SectionTitle } from '../styles/texts';

const PwdModification = (props) => {
  const [datas, setDatas] = useState({});

  const handleChange = (e) => {
    setDatas({
      ...datas,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (datas.password === datas.passwordBis) {
      try {
        await Axios.put(`https://wote.website/api/users/${props.user.idUser}`, {
          password: datas.password,
          oldPassword: datas.oldPassword,
        });
        toast.success(`${props.user.emailUser}, mot de passe modifié`, {});
      } catch (err) {
        toast.error(`${err.message}`, {});
      }
    } else {
      toast.error(`Les deux mots de passe doivent être identiques`, {});
    }
  };

  return (
    <MainContainerWithHeader>
      <MainHeader>
        <SectionTitle>Modifier le mot de passe</SectionTitle>
      </MainHeader>
      <BurgerMenu />
      <FormCpnt submitFuncToPass={handleSubmit}>
        <InputCpnt
          labelText="Ancien mot de passe"
          inputType="oldPassword"
          nameForInput="oldPassword"
          inputPlaceHolder="..."
          value={datas.oldPassword}
          onChangeFunc={handleChange}
        />
        <InputCpnt
          labelText="Nouveau mot de passe"
          inputType="password"
          nameForInput="password"
          inputPlaceHolder="..."
          value={datas.password}
          onChangeFunc={handleChange}
        />
        <InputCpnt
          labelText="Confirmez nouveau mot de passe"
          inputType="password"
          nameForInput="passwordBis"
          inputPlaceHolder="..."
          value={datas.passwordBis}
          onChangeFunc={handleChange}
        />
        <Button buttonType="submit" greenBg withMarginTop hoverWhite>
          Enregistrer
        </Button>
      </FormCpnt>
      <ToastContainer
        position="bottom-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </MainContainerWithHeader>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps)(PwdModification);

PwdModification.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
  idUser: PropTypes.number.isRequired,
};
