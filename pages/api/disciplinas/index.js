// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dataBase } from "@/services/firebase"
import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {

  if (req.method == 'GET') {
    get(child(ref(dataBase), 'disciplinas')).then(snapshot => {
      const disciplinas = []
      snapshot.forEach(item => {
        disciplinas.push(item.val())
      })
      res.status(200).json(disciplinas)
    })
  } else if (req.method == 'POST') {
    const id = v4()
    const dados = req.body
    dados.id = id

    set(ref(dataBase, 'disciplinas/' + id), dados)

    res.status(200).json(dados)
  }
}