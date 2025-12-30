pipeline {
    agent { docker { image 'mcr.microsoft.com/playwright:v1.57.0-noble' } }

    tools {
        // Must match the name you gave in Manage Jenkins -> Tools
        nodejs 'NodeJS' 
    }

    stages {
        stage('Cleanup') {
            steps {
                // Deletes previous results so you don't see old data
                bat 'if exist playwright-report rmdir /s /q playwright-report'
                bat 'if exist results.xml del /q results.xml'
            }
        }

        stage('Install') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install --with-deps'
            }
        }

        stage('Run Tests') {
            steps {
                // This runs your specific smoke test
                // We use 'call' to ensure batch continues to the reporting stage
                bat 'call npx playwright test tests/spec/e2e/smoke/homepage.spec.ts --project chromium'
            }
        }
    }

    post {
        always {
            // This processes the XML file you configured in playwright.config.ts
            junit 'results.xml'

            // This publishes the beautiful HTML report with videos/screenshots
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