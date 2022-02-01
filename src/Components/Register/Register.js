import React from "react";
import { FaFacebook, FaGoogle } from "react-icons/fa/";
import Input from "../Formulaire/Input/Input";
import Bouton from "../Formulaire/Bouton/Bouton";
import { Link } from "react-router-dom";


const Index = () => {
  return (
    <div>
      <div className="box border-solid shadow-xl rounded-md mx-auto h-auto mt-16 ">
        <div className="container w-96 mx-auto">
          <p className="text-center text-xl text-green-500 pt-8">
            Creation de compte
          </p>
          <p className="text-center text-sm mb-10">
            Creer un compte pour profiter du shooping en ligne
          </p>
          <Input placeholder="Nom et prenom" type="text" />
          <Input placeholder="Ville" type="text" />
          <Input placeholder="Telephone" type="text" />
          <Bouton value="CONTINUER" />

          <div className="columns-2 ... py-3">
            <p className="text-sm">Ave-vous deja un compte?</p>
            <p className="text-sm text-green-500">
              <Link to="/connexion">Connexion</Link>
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button className="container  mb-4 col-span-1 text-xs text-center rounded-md border border-gray-200 py-1 pl-2  hover:bg-white hover:border-b hover:l hover:r hover:border-green-500">
              <div className="grid grid-cols-7 py-3">
                <p className="col-span-1 text-sm"><FaFacebook /></p>
                <p className="col-span-6 text-sm">S'incrire avec Facebook</p>
              </div>
            </button>
            <button className="container  mb-4 col-span-1 text-xs text-center rounded-md border  border-gray-200 py-1 pl-2 hover:bg-white hover:border-b hover:l hover:r hover:border-green-500">
              <div className="grid grid-cols-7 py-3">
                <p className="col-span-1 text-sm"><FaGoogle /></p>
                <p className="col-span-6 text-sm">S'incrire avec Google</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
