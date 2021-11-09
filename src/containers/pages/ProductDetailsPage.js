import { useParams } from "react-router"
import { useProducts } from "../../hooks/useProducts"
import {
  Col,
  Container,
  Row,
  InputGroup,
  InputGroupText,
  Input,
  ButtonDropdown,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import { LoadingComponent } from "../../components/LoadingComponent"
import { NotFoundData } from "../../components/NotFoundData"
import "../../styles/product.scss"
import React from "react"
import { ContactForm } from "../../components/ContactForm"
import { AlertWrapper } from "../../components/AlertWrapper"

export const ProductDetailsPage = () => {
  const [isOpen, setOpen] = React.useState(false)
  const { id } = useParams()
  const { loading, products, error } = useProducts()
  const product =
    !loading &&
    !error &&
    products &&
    products.find((item) => item.id === parseInt(id, 10))
  const [radio, setRadio] = React.useState(0)
  const [status, setStatus] = React.useState({ ok: false, error: undefined })
  React.useEffect(() => {
    if (status.ok || status.error) {
      setOpen(true)
    }
  }, [status])
  return (
    <Container className="product-wrapper">
      {!loading && product && (
        <>
          <Row className="p-4">
            <Col>
              <h1 className="text-center">{product.name}</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <img alt="ecomebli" className="w-100" src={product.img} />
            </Col>
            <Col
              md={6}
              className="d-flex align-items-center justify-content-center form-wrapper"
            >
              <div className="d-flex flex-column w-100">
                {/* Калькулятор */}
                <div>
                  <span>Калькулятор вартості товару</span>

                  <div class="input-group mb-2">
                    <span class="input-group-text">Кількість</span>
                    <input type="number" class="form-control" placeholder="0" />
                    <span class="input-group-text">шт.</span>
                  </div>

                  <div class="input-group mb-2">
                    <span class="input-group-text">Матеріал</span>
                    <select
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>оберіть матеріал...</option>
                      <option value="1">Сосна 15000грн</option>
                      <option value="2">Вільха 15000грн</option>
                      <option value="3">Ясен 18000грн</option>
                      <option value="3">Дуб 22000грн</option>
                    </select>
                  </div>

                  <div class="input-group mb-3">
                    <button
                      class="btn btn-outline-secondary"
                      type="button"
                      id="button-addon1"
                    >
                      Розрахувати вартість
                    </button>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="0 грн"
                    />
                  </div>
                </div>
                {/* Калькулятор */}

                <ul className="w-100 p-0">
                  {product.types &&
                    product.types.map((item, key) => {
                      console.log("item", item)
                      console.log("key", key)
                      return (
                        <li
                          key={key}
                          onClick={() => setRadio(key)}
                          className="py-1 my-1 px-2"
                        >
                          <div className="w-50 text-capitalize">
                            <input
                              id={"radio_" + item}
                              checked={radio === key}
                              name="radio"
                              type="radio"
                              value={item}
                              className="mx-2"
                            />
                            <span>{item.name}</span>
                          </div>
                          <div className="w-50 text-end">
                            {item.price + " " + item.currency}
                          </div>
                        </li>
                      )
                    })}
                </ul>
                <ContactForm
                  setStatus={setStatus}
                  product_id={id}
                  product={product.name + " " + product.types[radio].name}
                />
                {isOpen ? (
                  <AlertWrapper
                    setOpen={setOpen}
                    isOpen={isOpen}
                    status={status}
                  />
                ) : (
                  <div />
                )}
              </div>
            </Col>
          </Row>
        </>
      )}
      {loading && <LoadingComponent />}
      {!loading && !product && <NotFoundData />}
    </Container>
  )
}
