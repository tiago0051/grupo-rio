import type { NextApiRequest, NextApiResponse } from "next"

import nodemailer from "nodemailer"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const {nome, sobrenome, telefone, email} = req.body

    const transporter = nodemailer.createTransport({
        pool: true,
        port: 465,
        host: "mail.devsoftbr.com",
        secure: true,
        auth: {
            user: "formulario@devsoftbr.com",
            pass: "@Abab232524"
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    const mailData = {
        from: '"Agência Conecte-se" <'+ email +'>',
        to: "contato@rjgrupo.com.br",
        subject: "Contato pelo site",
        html: "<h1>Contato pelo site</h1><br><br><p>Nome: "+ nome +" "+ sobrenome +"</p><br><p>Telefone: "+ telefone +"</p><br><p>E-mail: "+ email +"</p>"
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err) {
            res.status(500).json({
                error: err,
                enviado: false
            })
        }else{
            res.status(200).json({ enviado: true })
        }
    })
  }