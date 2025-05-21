import "bootstrap/dist/css/bootstrap.min.css"
import { Container, Row, Col, Form, Button, Badge } from "react-bootstrap"
import "./avaliacao.css"

export default function Avaliacao() {
  // Dados do livro
  const livro = {
    titulo: "O Clube Mary Shelley",
    autor: "Goldy Moldavsky",
    capa: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-5unXF9Lcr0polC4UihcnGoot5lWlA0.png",
    avaliacao: 4,
    totalAvaliacoes: 130,
  }

  // Dados das avaliações
  const avaliacoes = [
    {
      nome: "Alice Crivano",
      avaliacao: 5,
      comentario:
        "O livro é muito bom, a escrita é envolvente e prendeu. Personagens bem construídos também. O enredo é envolvente, cheio de mistério, algumas cenas desconcertantes e outras tensas. Não sou a maior fã de livros de terror, mas esse em específico foi bem interessante. Foi uma ótima surpresa, super recomendo!",
    },
    {
      nome: "Alan Silva",
      avaliacao: 4,
      comentario:
        "Livro autêntico e cheio de reviravoltas! No começo pode parecer mais um clichê de mistério de high school, mas o final é uma teia de plot twists que me deixou de queixo caído! Perfeito para os fãs de Mary Shelley!",
    },
    {
      nome: "Vitor Roberto",
      avaliacao: 3,
      comentario:
        "Me surpreendeu. Não é uma obra-prima contemporânea, mas é gostoso de ler. O começo é arrastado, os personagens são meio previsíveis, mas as reviravoltas são...",
    },
  ]

  // Renderiza estrelas baseado na avaliação
  const renderEstrelas = (quantidade) => {
    const estrelas = []
    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <span key={i} className={`estrela ${i <= quantidade ? "estrela-preenchida" : "estrela-vazia"}`}>
          ★
        </span>,
      )
    }
    return estrelas
  }

  // Gêneros disponíveis
  const generos = ["Romance", "Terror", "Fantasia", "Biografia", "Drama", "Poesia"]

  return (
    <Container fluid className="p-0 bg-livro">
      {/* Barra de pesquisa */}
      <Row className="m-0 p-3 barra-pesquisa">
        <Col>
          <Form.Control type="search" placeholder="Pesquisar livros..." className="rounded-pill border-0 p-2" />
        </Col>
      </Row>

      {/* Filtros de gênero */}
      <Row className="m-0 p-2 filtros-genero">
        <Col className="d-flex justify-content-center flex-wrap">
          {generos.map((genero, index) => (
            <Badge key={index} pill bg="secondary" className="m-1 px-3 py-2 genero-badge">
              {genero}
            </Badge>
          ))}
        </Col>
      </Row>

      {/* Conteúdo principal */}
      <Row className="m-0 justify-content-center">
        <Col xs={12} md={8} lg={6} className="text-center p-4">
          {/* Capa do livro */}
          <div className="capa-livro mb-3">
            <img
              src={livro.capa || "/placeholder.svg"}
              alt={livro.titulo}
              className="img-fluid"
              style={{ maxHeight: "300px" }}
            />
          </div>

          {/* Botão de iniciar leitura */}
          <Button variant="secondary" className="mb-4 px-4 botao-leitura">
            Iniciar leitura
          </Button>

          {/* Avaliação */}
          <div className="mb-2">{renderEstrelas(livro.avaliacao)}</div>
          <div className="mb-4 total-avaliacoes">
            {livro.totalAvaliacoes}
            <br />
            Avaliações
          </div>

          {/* Lista de avaliações */}
          <div className="avaliacoes-container">
            {avaliacoes.map((avaliacao, index) => (
              <div key={index} className="avaliacao-item mb-4">
                <div className="d-flex align-items-center mb-2">
                  <div className="avatar-usuario me-2">
                    {index === 0 && <span>👩</span>}
                    {index === 1 && <span>🐱</span>}
                    {index === 2 && <span>👨</span>}
                  </div>
                  <div className="nome-usuario">{avaliacao.nome}</div>
                </div>
                <div className="mb-1">{renderEstrelas(avaliacao.avaliacao)}</div>
                <p className="comentario-texto">{avaliacao.comentario}</p>
              </div>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
