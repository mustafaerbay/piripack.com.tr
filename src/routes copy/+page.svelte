<script>
// @ts-nocheck

	import { Col, Container, Row } from "@sveltestrap/sveltestrap";
	import TypeWriter from "../Components/TypeWriter.svelte";
    import About from '../Components/Layout/About.svelte';
</script>


<section class="section header-bg-img h-100vh align-items-center d-flex clip-home" id="home">
    <div class="bg-overlay"></div>
    <Container class="z-2">
        <Row class="justify-content-center">
            <Col lg="12">
                <div class="text-center header-content mx-auto">
                    <h4 class="text-white first-title mb-4">Welcome</h4>
                    <h1 class="header-name text-white text-capitalize mb-0">Piripack 
                        <TypeWriter />
                    </h1>
                    <p class="text-white mx-auto header-desc mt-4">It is a long established fact that a reader will be of a page when established fact looking at its layout.</p>
                    <div class="mt-4 pt-2">
                        <a href="#contact" class="btn btn-outline-white rounded-pill">İletişime Geç</a>
                    </div>
                </div>
            </Col>
        </Row>
    </Container>
    <div class="scroll_down">
        <a href="#about" class="scroll">
            <i class="text-white"></i>
        </a>
    </div>
</section>
<About/>