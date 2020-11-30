import http from "./httpService";
import {
  eventsUrl
} from "../config"

function eventUrl(id) {
  return `${eventsUrl}/${id}`
}

export function getEvents() {
  return http.get(`${eventsUrl}/index`)
}

export function getEvent(eventId) {
  return http.get(eventUrl(eventId))
}

export function saveEvent(event) {
  if (event.id) {
    const body = {
      ...event
    }
    delete body.id
    return http.put(eventUrl(event.id), body)
  }

  return http.post(`${eventsUrl}`, event)
}

export function deleteEvent(eventId) {
  return http.delete(eventUrl(eventId))
}