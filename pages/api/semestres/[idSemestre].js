// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { dataBase } from "@/services/firebase"
import { child, get, ref, remove, update } from "firebase/database"

export default function handler(req, res) {
  const id = req.query.idSemestre

  if(req.method == 'GET') {
    get(child(ref(dataBase), 'semestres/' + id)).then(snapshot => {
      res.status(200).json(snapshot)
    })
  } else if (req.method == 'PUT') {
    const dados = req.body

    update(ref(dataBase, 'semestres/' + id), dados)
    res.status(200).json(dados)
  } else if (req.method == 'DELETE') {
    remove(ref(dataBase, 'semestres/' + id))
    res.status(200).json(id)
  }
}