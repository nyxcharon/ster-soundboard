import { getSoundList } from '../mockAPI'

test('The API returns a non zero length array', () => {
  let soundList = getSoundList()
  expect(soundList.length).toBeGreaterThan(0)
})

test('The API returns valid data', () => {
  let soundList = getSoundList()
  expect(soundList[0].soundName).toBeDefined()
  expect(soundList[0].soundURL).toBeDefined()
})
