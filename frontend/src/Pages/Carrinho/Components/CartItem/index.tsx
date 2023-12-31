import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { IProduto } from "../../../../services/produto.service";

export interface PropsCardItem {
  produto: IProduto;
  quantidade: number;
}

export default function CartItem(props: PropsCardItem) {
  return (
    <Card style={{ padding: "0px" }}>
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-row align-items-center">
            <img
              src="https://coyote.ca/wp/wp-content/uploads/2013/09/generic_brands_web_700x650.jpg"
              className="img-fluid rounded-3"
              alt="Shopping item"
              style={{ width: "65px" }}
            />
          </div>
          <div className="ms-3">
            <h5>{props.produto.nome}</h5>
          </div>
          <div className="d-flex flex-row align-items-center">
            <div style={{ width: "40px" }}>
              <h5 className="fw-normal mb-0">{props.quantidade}</h5>
            </div>
            <div style={{ width: "80px" }}>
              <h5 className="mb-0">{props.produto.preco}</h5>
            </div>
            <a href="#" style={{ color: "#cecece" }}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </a>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
