import request from 'supertest'
import app from './app'


describe('App', () => {
  it('works', (done) =>
    request(app)
      .get('/api')
      .expect('Content-Type', /json/)
      .expect(200, done)
  )
})
