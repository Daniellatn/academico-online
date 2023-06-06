// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dataBase } from "@/services/firebase"
import { child, get, ref, set } from "firebase/database"
import { v4 } from "uuid"

export default function handler(req, res) {
  if(req.method == 'GET') {
    get(child(ref(dataBase), 'semestres')).then(snapshot => {
      const semestres = []
      snapshot.forEach(item => {
        semestres.push(item.val())
      })
      res.status(200).json(semestres)
    })
  } else if (req.method == 'POST') {
    const id = v4()
    const dados = req.body
    dados.id = id

    set(ref(dataBase, 'semestres/' + id), dados)

    res.status(200).json(dados)
  }
}