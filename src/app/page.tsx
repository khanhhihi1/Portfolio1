"use client";
import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Nav,
  Navbar,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import styles from "./styles/portfolio.module.css";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaLaptopCode,
  FaServer,
  FaDatabase,
  FaProjectDiagram,
  FaCode, FaPlay, FaGithub
} from "react-icons/fa";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" >
            KhanhNguyen
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <Navbar.Collapse id="basic-navbar-nav" className={menuOpen ? "show" : ""}>
            <Nav className="ms-auto align-items-md-center">
              <Nav.Link href="#about">Giới thiệu</Nav.Link>
              <Nav.Link href="#projects">Dự án</Nav.Link>
              <Nav.Link href="#contact">Liên hệ</Nav.Link>
              <Button variant="primary" className="ms-md-2 mt-2 mt-md-0">
                CV
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero */}
      <section id="home" className={styles.hero}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="fw-bold mb-3">
                Xin chào, tôi là <span className="text-dark">Khánh</span>
              </h1>
              <p className="text-muted mb-4">
                Tôi xây dựng các trải nghiệm số hiện đại, thân thiện với người dùng
                bằng công nghệ web tiên tiến.
              </p>
              <section className="py-5">
                <div className={styles.btnGroup}>
                  <Button className={styles.primaryBtn} href="#projects">
                    Xem dự án
                  </Button>

                  <Button className={styles.outlineBtn} href="#contact">
                    Liên hệ
                  </Button>
                </div>
              </section>
            </Col>
            <Col md={6} className="text-center">
              <div className={styles.avatarWrapper}>
                <img
                  src="/avt.jpg"
                  alt="Developer"
                  className={styles.avatar}
                />
              </div>
              <div className={styles.expBadge}>
                <strong>Chưa có</strong>
                <div>Kinh nghiệm</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About */}
      <section id="about" className="py-5 bg-white">
        <Container className={styles.introSection}>
          <h2 className="text-center mb-4 fw-bold">Giới thiệu</h2>

          <Row>
            <Col md={4} className={styles.col}>
              <div className={styles.card}>
                <h4 className="mb-3">Thông tin cá nhân</h4>
                <ul className={styles.infoList}>
                  <li>
                    <FaUser className={styles.icon} />
                    <div>
                      <b>Tên:</b> Nguyễn Đông Khánh
                    </div>
                  </li>
                  <li>
                    <FaEnvelope className={styles.icon} />
                    <div>
                      <b>Email:</b> dongkhanh88888@gmail.com
                    </div>
                  </li>
                  <li>
                    <FaMapMarkerAlt className={styles.icon} />
                    <div>
                      <b>Địa điểm:</b> Gò Vấp, TP.HCM
                    </div>
                  </li>
                  <li>
                    <FaGraduationCap className={styles.icon} />
                    <div>
                      <b>Học vấn:</b> Cao đẳng FPT Polytechnic
                    </div>
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={4} className={styles.col}>
              <div className={styles.card}>
                <h4 className="mb-3">Kỹ năng</h4>

                <div className={styles.skillGroup}>
                  <div className={styles.skillHeader}>
                    <FaLaptopCode className={styles.skillIcon} />
                    <strong>Frontend</strong>
                  </div>
                  <p className={styles.skillText}>
                    React · Next.js · Bootstrap · JavaScript · TypeScript · HTML5 · CSS3
                  </p>

                  <div className={styles.skillHeader}>
                    <FaServer className={styles.skillIcon} />
                    <strong>Backend</strong>
                  </div>
                  <p className={styles.skillText}>Node.js · Express · MongoDB · MySQL</p>

                  <div className={styles.chips}>
                    {/* small skill chips */}
                    {[
                      "React",
                      "Next.js",
                      "TypeScript",
                      "Bootstrap",
                      "Node.js",
                      "Express",
                      "MongoDB",
                    ].map((t) => (
                      <span key={t} className={styles.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} className={styles.col}>
              <div className={styles.card}>
                <h4 className="mb-3">Kinh nghiệm học tập</h4>
                <div className={styles.experience}>
                  <div className={styles.expItem}>
                    <FaProjectDiagram className={styles.expIcon} />
                    <div>
                      <b>Dự án nhóm:</b>
                      <p className={styles.expText}>Dẫn dắt các thành viên xây dựng trang web thực tế.</p>
                    </div>
                  </div>

                  <div className={styles.expItem}>
                    <FaProjectDiagram className={styles.expIcon} />
                    <div>
                      <b>Dự án cá nhân:</b>
                      <p className={styles.expText}>Xây các trang web nhỏ dùng nhiều công nghệ khác nhau.</p>
                    </div>
                  </div>

                  <div className={styles.badgeRow}>
                    <span className={styles.badge}>5+ Projects</span>
                    <span className={styles.badge}>Team Lead (group)</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Projects */}
      <section id="projects" className="py-5 bg-light">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Dự án của tôi</h2>
          <Row>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src="/gameXO.jpg" />
                <Card.Body>
                  <Card.Title>Game XO</Card.Title>
                  <Card.Text>
                    Game XO sử dụng các công nghệ: HTML5 CSS3, Javascript, Tailwind CSS
                  </Card.Text>
                  <div className={styles.btnGroup}>
                    <Button
                      href="https://github.com/khanhhihi1/gameXO"
                      className={`${styles.primaryBtn}`}
                      aria-label="Xem code"
                    >
                      <FaCode className={styles.btnIcons} />
                      <span className={styles.btnText}>Xem code</span>
                    </Button>

                    <Button
                      href="https://game-xo-chi.vercel.app/"
                      className={`${styles.outlineBtn}`}
                      aria-label="Demo"
                    >
                      <FaPlay className={styles.btnIcon} />
                      <span className={styles.btnText}>Demo</span>
                    </Button>
                     <div className={styles.chips}>
                    {/* small skill chips */}
                    {[
                      "Javascript",
                      "Tailwind CSS",
                      "HTML5",
                      "CSS3",
                    ].map((t) => (
                      <span key={t} className={styles.chip}>
                        {t}
                      </span>
                    ))}
                  </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src="/project2.jpg" />
                <Card.Body>
                  <Card.Title>Ứng dụng Quản lý công việc</Card.Title>
                  <Card.Text>Ứng dụng Kanban kéo thả quản lý task.</Card.Text>
                  <div className={styles.btnGroup}>
                    <Button
                      href="#projects"
                      className={`${styles.primaryBtn}`}
                      aria-label="Xem code"
                    >
                      <FaCode className={styles.btnIcons} />
                      <span className={styles.btnText}>Xem code</span>
                    </Button>

                    <Button
                      href="#contact"
                      className={`${styles.outlineBtn}`}
                      aria-label="Demo"
                    >
                      <FaPlay className={styles.btnIcon} />
                      <span className={styles.btnText}>Demo</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="mb-4 shadow-sm">
                <Card.Img variant="top" src="/project3.jpg" />
                <Card.Body>
                  <Card.Title>Bảng điều khiển MXH</Card.Title>
                  <Card.Text>Dashboard phân tích dữ liệu mạng xã hội.</Card.Text>
                  <div className={styles.btnGroup}>
                    <Button
                      href="#projects"
                      className={`${styles.primaryBtn}`}
                      aria-label="Xem code"
                    >
                      <FaCode className={styles.btnIcons} />
                      <span className={styles.btnText}>Xem code</span>
                    </Button>

                    <Button
                      href="#contact"
                      className={`${styles.outlineBtn}`}
                      aria-label="Demo"
                    >
                      <FaPlay className={styles.btnIcon} />
                      <span className={styles.btnText}>Demo</span>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Contact */}
      <section id="contact" className="py-5 bg-white">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Liên hệ</h2>
          <Row>
            <Col md={6} className={styles.contactCol}>
              <h4 className="mb-3">Thông tin liên lạc</h4>

              <ul className={styles.contactList}>
                <li className={styles.contactItem}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <FaEnvelope />
                  </span>
                  <div className={styles.contactInfo}>
                    <div className={styles.label}>Email</div>
                    <a
                      href="mailto:dongkhanh88888@gmail.com"
                      className={styles.contactLink}
                    >
                      dongkhanh88888@gmail.com
                    </a>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <FaMapMarkerAlt />
                  </span>
                  <div className={styles.contactInfo}>
                    <div className={styles.label}>Địa chỉ</div>
                    <div className={styles.contactText}>Gò Vấp, TP.HCM</div>
                  </div>
                </li>

                <li className={styles.contactItem}>
                  <span className={styles.iconWrap} aria-hidden="true">
                    <FaGithub />
                  </span>
                  <div className={styles.contactInfo}>
                    <div className={styles.label}>GitHub</div>
                    <a
                      href="https://github.com/khanhhihi1"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.contactLink}
                    >
                      github.com/khanhhihi1
                    </a>
                  </div>
                </li>
              </ul>
            </Col>
            <Col md={6}>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Họ và tên</Form.Label>
                  <Form.Control type="text" placeholder="Nhập tên của bạn" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Nhập email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Tin nhắn</Form.Label>
                  <Form.Control as="textarea" rows={4} />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100">
                  Gửi tin nhắn
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-4">
        <Container className="text-center">
          <p className="mb-0">© 2025 KhanhNguyen Portfolio. All rights reserved.</p>
        </Container>
      </footer>
    </>
  );
}