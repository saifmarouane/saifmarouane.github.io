import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Descrebo art"
              description=" 
              📱 Have you ever wanted to turn your imagination into reality? With this innovative app, I've combined the power of AI models like DALL-E and GPT to create a unique experience where you can bring your ideas to life through images.
🤖 How does it work? Imagine chatting with a conversational assistant that guides you to describe an image. As the conversation evolves, the assistant intuitively prompts you to provide more details. When you're ready, simply press the generate button, and watch as the AI takes your descriptions and creates stunning images that match your vision.
🎉 What sets this app apart:
Seamless user interaction: The assistant engages you in a dynamic conversation, ensuring all details are captured.
AI synergy: DALL-E and GPT work in harmony to understand your descriptions and turn them into vivid images
              "
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Chatbot Médical"
              description="Le Chatbot Médical en JavaFX est une application interactive conçue pour offrir des informations médicales de base, des conseils de santé, et des réponses à des questions courantes sur la santé. Il vise à fournir un accès rapide à des informations médicales fiables ."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Powered App Comarkdownntent Generator with GPT"
              description="This innovative app is designed to simplify content creation by guiding users through a conversation with our AI assistant. Whether you're crafting a YouTube video script, a blog post, or any other content, our app is here to assist you every step of the way. Just tell the assistant what you need to create, and it'll ask you the right questions to help you generate compelling content.
              What inspired me to create this app? I saw an opportunity to provide a smarter, more user-friendly solution in the content creation space. While traditional chatbots may face challenges in this domain, our app aims to make the process seamless and creative"
              ghLink="#"
              demoLink="#"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="L'Application de Recommandation de Livres est une solution technologique innovante conçue en utilisant Flask, une application web Python, ainsi que des techniques de Traitement du Langage Naturel (NLP) et de l'apprentissage automatique (machine learning). Cette application vise à améliorer l'expérience de lecture en aidant les utilisateurs à découvrir des livres qui correspondent à leurs préférences et à leurs intérêts littéraires"
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Prompt engineering for Auto Assessment"
              description=" Parmi les cas d'usage des technologies type Generative AI, le déploiement des assistants pour des tâches spécialisées.  Cette customisation passe par la conception d'un prompt dédié pour la tâche souhaitée et également par l'intégration d'autres couches et de fine tuning spécifique au contexte du projet. Afin d'automatiser l'auto-évaluation des candidats dans un parcours d'apprentissage, l'objectif du projet est de mettre en place une chaîne de chatbots prompts pour évaluer le niveau d'un candidat sur une technologie donnée en utilisant Chatgpt."
              ghLink="#"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=" Emotion Detection"
              description="The Emotion Recognition Mobile App is a cutting-edge application developed using Java and TensorFlow within the Android Studio environment. This app leverages the power of machine learning to recognize and analyze human emotions based on input from various sources, such as images or audio recordingsTrained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="#"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
