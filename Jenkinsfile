pipeline{
    agent any
    stages {
        stage('Build') {
            steps {
                echo 'Building....'
            }
        }
        stage('Test'){
            steps {
                echo 'Testing...'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying...'
            }
        }
    }
    post{
        always{
            echo "This will always run"
        }
        success{
            echo "This will run if the build success"
        }
        failure{
            echo "This will run if the job failed"
        }
        unstable{
            echo "This will run if the completion status"
        }
        changed{
            echo "This will run if the state of the pipeline has changed"
        }
        fixed {
            echo "This will run if the previous run failed"
        }
    }
}