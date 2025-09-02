"use client";

import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
	return (
		<form
			action="https://formsubmit.co/gabriel.henrique7@hotmail.com"
			method="POST"
			className="space-y-4"
		>
			<input
				type="hidden"
				name="_subject"
				value="Nova Mensagem do Formulário de Contato"
			/>
			<input type="hidden" name="_captcha" value="false" />
			<input
				type="hidden"
				name="_next"
				value="http://localhost:3000/thank-you"
			/>
			<div>
				<Label htmlFor="name" className="text-green-300">
					Nome
				</Label>
				<Input
					id="name"
					name="name"
					placeholder="Seu nome"
					required
					className="mt-1 border-green-800/30 bg-black/40 text-white placeholder:text-gray-500 focus:border-green-500"
				/>
			</div>

			<div>
				<Label htmlFor="email" className="text-green-300">
					Email
				</Label>
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="seu.email@exemplo.com"
					required
					className="mt-1 border-green-800/30 bg-black/40 text-white placeholder:text-gray-500 focus:border-green-500"
				/>
			</div>

			<div>
				<Label htmlFor="message" className="text-green-300">
					Mensagem
				</Label>
				<Textarea
					id="message"
					name="message"
					placeholder="Sua mensagem..."
					required
					className="mt-1 min-h-[120px] border-green-800/30 bg-black/40 text-white placeholder:text-gray-500 focus:border-green-500"
				/>
			</div>

			<Button
				type="submit"
				className="w-full bg-gradient-to-r from-green-600 to-teal-600 hover:from-green-700 hover:to-teal-700"
			>
				<span className="flex items-center">
					Enviar Mensagem <Send className="ml-2 h-4 w-4" />
				</span>
			</Button>
		</form>
	);
}
