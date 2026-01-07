import {test, expect } from '@playwright/test'

test('should mock an api call', async({page})=>{
    await page.route('**/todos/1', async (route)=>{ //Network interception: Tells Playwright to watch for 
    // and catch a specific network call
        const mockTodo = {
            userId:1,
            id: 1,
            title: "MOCK: Complete Playwright Network Training",
            completed: false
        }
        await route.fulfill({ //API Mocking: Provides fake data the completes the mock
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify(mockTodo),
        })
        console.log('test ', mockTodo)

    })
    await page.goto('https://jsonplaceholder.typicode.com/todos/1')
    await expect(page.getByText('MOCK: Complete Playwright Network Training')).toBeVisible();
})