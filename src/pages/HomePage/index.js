import React from "react";
import { useState } from "react";
import {
  BoxDay,
  ContainCalendar,
  WrapperButton,
  WrapperList,
  WrapperMain,
} from "./style";

export default function HomePage() {
  //estados que guardam as listas dos dias da semana
  const [listaSegundaFeira, setListaSegundaFeira] = useState([]);
  const [listaTercaFeira, setListaTercaFeira] = useState([]);
  const [listaQuartaFeira, setListaQuartaFeira] = useState([]);
  const [listaQuintaFeira, setListaQuintaFeira] = useState([]);
  const [listaSextaFeira, setListaSextaFeira] = useState([]);

  const [colorSegunda, setColorSegunda] = useState("");
  const [colorTerca, setColorTerca] = useState("");
  const [colorQuarta, setColorQuarta] = useState("");
  const [colorQuinta, setColorQuinta] = useState("");
  const [colorSexta, setColorSexta] = useState("");

  const [tarefa, setTarefa] = useState("");
  const [day, setDay] = useState("");

  const addItem = (item) => {
    if (item) {
      // eslint-disable-next-line default-case
      switch (day) {
        case "Segunda-Feira":
          setListaSegundaFeira((valorAntigo) => [
            ...valorAntigo,
            { task: item },
          ]);
          break;
        case "Terça-Feira":
          setListaTercaFeira((valorAntigo) => [
            ...valorAntigo,
            { id: Math.random(), task: item },
          ]);
          break;
        case "Quarta-Feira":
          setListaQuartaFeira((valorAntigo) => [
            ...valorAntigo,
            { id: Math.random(), task: item },
          ]);
          break;
        case "Quinta-Feira":
          setListaQuintaFeira((valorAntigo) => [
            ...valorAntigo,
            { id: Math.random(), task: item },
          ]);
          break;
        case "Sexta-Feira":
          setListaSextaFeira((valorAntigo) => [
            ...valorAntigo,
            { id: Math.random(), task: item },
          ]);
          break;
      }
    } else {
      alert("Você precisa escrever alguma tarefa");
    }
  };
  const removeInSegunda = (item) => {
    const filtered = listaSegundaFeira.filter((task) => task.id !== item);
    setListaSegundaFeira(filtered);
  };
  const removeInTerca = (item) => {
    const filtered = listaTercaFeira.filter((task) => task.id !== item);
    setListaTercaFeira(filtered);
  };
  const removeInQuarta = (item) => {
    const filtered = listaQuartaFeira.filter((task) => task.id !== item);
    setListaQuartaFeira(filtered);
  };
  const removeInQuinta = (item) => {
    const filtered = listaQuartaFeira.filter((task) => task.id !== item);
    setListaQuintaFeira(filtered);
  };
  const removeInSexta = (item) => {
    const filtered = listaSextaFeira.filter((task) => task.id !== item);
    setListaSextaFeira(filtered);
  };

  const showSegundaFeira =
    listaSegundaFeira &&
    listaSegundaFeira.map((item) => {
      return (
        <WrapperList key={item.id}>
          <input type={"checkbox"} />
          <span>{item.task}</span>
          <WrapperButton onClick={() => removeInSegunda(item.id)}>
            x
          </WrapperButton>
        </WrapperList>
      );
    });
  const showTercaFeira =
    listaTercaFeira &&
    listaTercaFeira.map((item) => {
      return (
        <WrapperList key={item.id}>
          <input type={"checkbox"} />
          <span>{item.task}</span>
          <WrapperButton onClick={() => removeInTerca(item.id)}>
            x
          </WrapperButton>
        </WrapperList>
      );
    });
  const showQuartaFeira =
    listaQuartaFeira &&
    listaQuartaFeira.map((item) => {
      return (
        <WrapperList key={item.id}>
          <input type={"checkbox"} />
          <span>{item.task}</span>
          <WrapperButton onClick={() => removeInQuarta(item.id)}>
            x
          </WrapperButton>
        </WrapperList>
      );
    });
    const showQuintaFeira =
    listaQuintaFeira &&
    listaQuintaFeira.map((item) => {
      return (
        <WrapperList key={item.id}>
          <input type={"checkbox"} />
          <span>{item.task}</span>
          <WrapperButton onClick={() => removeInQuinta(item.id)}>
            x
          </WrapperButton>
        </WrapperList>
      );
    });
  const showSextaFeira =
    listaSextaFeira &&
    listaSextaFeira.map((item) => {
      return (
        <WrapperList key={item.id}>
          <input type={"checkbox"} />
          <span>{item.task}</span>
          <WrapperButton onClick={() => removeInSexta(item.id)}>
            x
          </WrapperButton>
        </WrapperList>
      );
    });

  return (
    <WrapperMain>
      <div>
        <input onChange={(e) => setTarefa(e.target.value)} />
        <select onChange={(e) => setDay(e.target.value)}>
          <option>Escolha uma Opção</option>
          <option>Segunda-Feira</option>
          <option>Terça-Feira</option>
          <option>Quarta-Feira</option>
          <option>Quinta-Feira</option>
          <option>Sexta-Feira</option>
        </select>
        <WrapperButton onClick={() => addItem(tarefa)}>Incluir</WrapperButton>
      </div>
      <ContainCalendar>
        <BoxDay color={colorSegunda}>
          <input
            type={"color"}
            onChange={(e) => setColorSegunda(e.target.value)}
          />
          Segunda-Feira
          <hr />
          {showSegundaFeira.length > 0
            ? showSegundaFeira
            : "Esta lista está vazia"}
        </BoxDay>

        <BoxDay color={colorTerca}>
          <input
            type={"color"}
            onChange={(e) => setColorTerca(e.target.value)}
          />
          <hr />
          Terça-Feira{showTercaFeira}
        </BoxDay>

        <BoxDay color={colorQuarta}>
          <input
            type={"color"}
            onChange={(e) => setColorQuarta(e.target.value)}
          />
          <hr />
          Quarta-Feira{showQuartaFeira}
        </BoxDay>

        <BoxDay color={colorQuinta}>
          <input
            type={"color"}
            onChange={(e) => setColorQuinta(e.target.value)}
          />
          <hr />
          Quinta-Feira{showQuintaFeira}
        </BoxDay>

        <BoxDay color={colorSexta}>
          <input
            type={"color"}
            onChange={(e) => setColorSexta(e.target.value)}
          />
          <hr />
          Sexta-Feira{showSextaFeira}
        </BoxDay>
      </ContainCalendar>
    </WrapperMain>
  );
}
