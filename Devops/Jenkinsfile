pipeline {
    agent any
	environment {
	}
    stages {
        stage('Build') {
            steps {
                // Build your application
                sh 'mvn clean install'
            }
        }
        
        stage('Test') {
            steps {
                // Run your tests
                sh 'mvn test'
            }
        }
    }
}
