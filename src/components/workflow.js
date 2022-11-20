import { Col, Container, Row } from "react-bootstrap"

const WorkFlow = () => {
    return (
        <div className="bg-white" id='flow'>
            <Container className="pt-5">
                <h1 className="display-2">WORKFLOW</h1>
                <Row>
                    <Col xs={12} lg={5}>
                        <p className="fw-normal my-3">It is particularly important for us that you as a customer are actively involved in creative processes and that you know at all times which step we are about to take next. Learn more about our workflow and our communication with you as a customer here.</p>
                        <div className="position-relative">
                            <img src="/images/flow.png" alt='' className="w-100 mt-5 mb-3" />
                            <img src="/images/corner.png" alt='' width={11} height={11} className="position-absolute" />
                            <img src="/images/corner.png" alt='' width={11} height={11} className="position-absolute" style={{ top: '10px', right: '12px' }} />
                            <img src="/images/corner.png" alt='' width={11} height={11} className="position-absolute" style={{ top: '30px', right: '-5px' }} />
                        </div>
                    </Col>
                    <Col xs={12} lg={7}>
                        <h4 className="fw-bold text-uppercase">How we deal with projects from start to finish</h4>
                        <p className="mt-4">The key to successful collaboration and results that are perfectly tailored to you is clear goal setting and the elimination of misunderstandings.</p>
                        <p className="mt-4">Before each project, we therefore obtain detailed information from you about what you expect from our service, what your goals are and what you particularly value. Our experts will also be happy to advise you on this step with their extensive specialist knowledge.</p>
                        <p className="my-5">As soon as your expectations have been clarified, we get down to work. We actively involve you, the customer, in the processes so that you always know where your project currently stands.</p>
                        <button className="bg-warning border-0 py-3 px-4 text-nowrap mb-5">LEARN MORE <img src="/images/ru.png" alt="" width={18} height={19} className='ms-4' /></button>
                        <h4 className="fw-normal text-uppercase text-decoration-underline mb-5">How we communicate with the client</h4>
                        <h4 className="fw-normal text-uppercase text-decoration-underline">Stages of the process</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default WorkFlow