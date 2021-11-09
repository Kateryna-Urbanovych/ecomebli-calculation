import React, { useState } from 'react';
import '../styles/calculator.scss';
import { InputGroup, InputGroupText, Input } from 'reactstrap';
// import { useProducts } from '../hooks/useProducts';

export const Calculator = ({ product }) => {
  // текущий продукт
  //   console.log('product', product);

  // все продукты
  //   const { products } = useProducts();
  //   console.log('products', products);

  const [count, setCount] = useState(0);
  const [material, setMaterial] = useState(0);

  const units = () => {
    switch (product.name) {
      case 'Двері':
        return 'шт.';
      case 'Сходи':
        return 'кв.м.';
      case 'Кухні':
        return 'пог.м.';
      default:
        return 'шт.';
    }
  };

  const handleCalculateTotalSum = () => {
    return count * material;
  };

  return (
    <>
      <div className="calculator-wrapper">
        <p className="calculator-header">Калькулятор вартості товару</p>

        <InputGroup className="input-group">
          <InputGroupText>Кількість</InputGroupText>
          <Input
            type="number"
            min="0"
            value={count}
            onChange={(event) => {
              setCount(event.target.value);
            }}
          />
          <InputGroupText>{units()}</InputGroupText>
        </InputGroup>

        <InputGroup className="input-group">
          <InputGroupText>Матеріал</InputGroupText>

          {product.name === 'Двері' && (
            <select
              className="form-select form-select-sm"
              value={material}
              onChange={(event) => {
                return setMaterial(event.target.value);
              }}
            >
              <option selected>оберіть матеріал...</option>
              <option value="15000">сосна 15000грн</option>
              <option value="15000">вільха 15000грн</option>
              <option value="18000">ясен 18000грн</option>
              <option value="22000">дуб 22000грн</option>
            </select>
          )}

          {product.name === 'Сходи' && (
            <select
              className="form-select form-select-sm"
              value={material}
              onChange={(event) => {
                return setMaterial(event.target.value);
              }}
            >
              <option selected>оберіть матеріал...</option>
              <optgroup label="обшивка каркасу">
                <option value="10850">сосна 10850грн</option>
                <option value="10850">вільха 10850грн</option>
                <option value="15500">ясен 15500грн</option>
                <option value="20150">дуб 20150грн</option>
              </optgroup>
              <optgroup label="сходи з дерева">
                <option value="18600">ясен 18600грн</option>
                <option value="24300">дуб 24300грн</option>
              </optgroup>
            </select>
          )}

          {product.name === 'Кухні' && (
            <>
              <select
                className="form-select form-select-sm"
                value={material}
                onChange={(event) => {
                  return setMaterial(event.target.value);
                }}
              >
                <option selected>оберіть матеріал...</option>
                <optgroup label="корпус з дсп, фасад з дерева">
                  <option value="12000">вільха 12000грн</option>
                  <option value="15000">ясен 15000грн</option>
                  <option value="18000">дуб 18000грн</option>
                </optgroup>
                <optgroup label="з масива дерева">
                  <option value="22000">дерево? 22000грн</option>
                </optgroup>
              </select>

              {/* <InputGroup>
                <DropdownToggle caret>Button Dropdown</DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>корпус дсп, фасад дерево</DropdownItem>
                  <DropdownItem>вільха 12000грн</DropdownItem>
                  <DropdownItem>ясен 15000грн</DropdownItem>
                  <DropdownItem>дуб 18000грн</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem header>масив дерева</DropdownItem>
                  <DropdownItem>дерево? 22000грн</DropdownItem>
                </DropdownMenu>
              </InputGroup> */}
            </>
          )}
        </InputGroup>

        <InputGroup>
          <InputGroupText className="input-total-sum">
            Загальна вартість
          </InputGroupText>
          <InputGroupText className="form-control">{`${handleCalculateTotalSum()}грн`}</InputGroupText>
        </InputGroup>
      </div>
    </>
  );
};
