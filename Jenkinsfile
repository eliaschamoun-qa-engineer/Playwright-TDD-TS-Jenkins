pipeline {
    // This image ALREADY has Node.js, Playwright, and Browsers installed
    agent { 
        docker { 
            image 'mcr.microsoft.com/playwright:v1.57.0-noble' 
        } 
    }

    stages {
        stage('Cleanup') {
            steps {
                // Since the Docker image is Linux-based (Noble), we use 'sh' instead of 'bat'
                sh 'rm -rf playwright-report results.xml'
            }
        }

        stage('Install') {
            steps {
                // Use 'sh' because Docker containers usually run Linux
                sh 'npm ci'
            }
        }

        stage('Run Tests') {
            steps {
                // No need for 'npx playwright install' because the Docker image has browsers!
                sh 'npx playwright test tests/spec/e2e/smoke/homepage.spec.ts --project chromium'
            }
        }
    }

    post {
        always {
            junit 'results.xml'
            publishHTML(target: [
                allowMissing: false,
                alwaysLinkToLastBuild: true,
                keepAll: true,
                reportDir: 'playwright-report',
                reportFiles: 'index.html',
                reportName: 'Playwright HTML Report'
            ])
        }
    }
}