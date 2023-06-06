// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dataBase } from "@/services/firebase"
import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  if (req.method == 'GET') {
    get(child(ref(dataBase), 'cursos')).then(snapshot => {
      const cursos = []
      snapshot.forEach(item => {
        cursos.push(item.val())
      })
      res.status(200).json(cursos)
    })
  } else if (req.method == 'POST') {
    const id = v4()
    const dados = req.body
    dados.id = id

    set(ref(dataBase, 'cursos/' + id), dados)

    res.status(200).json(dados)
  }
}